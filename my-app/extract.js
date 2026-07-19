const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const selectorParser = require('postcss-selector-parser');

const componentsDir = path.join(__dirname, 'src/app/components');
const globalsCssPath = path.join(__dirname, 'src/app/globals.css');

const componentClasses = {};

function getClassesFromCode(code) {
  const classes = new Set();
  const regex = /className=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(code)) !== null) {
    match[1].split(/\s+/).forEach(c => {
      if (c) classes.add(c);
    });
  }
  return classes;
}

const components = fs.readdirSync(componentsDir).filter(f => fs.statSync(path.join(componentsDir, f)).isDirectory());

components.forEach(comp => {
  const compDir = path.join(componentsDir, comp);
  const tsxFiles = fs.readdirSync(compDir).filter(f => f.endsWith('.tsx') || f.endsWith('.js'));
  if (tsxFiles.length > 0) {
    const tsxPath = path.join(compDir, tsxFiles[0]);
    const code = fs.readFileSync(tsxPath, 'utf8');
    componentClasses[comp] = {
      path: tsxPath,
      code,
      classes: getClassesFromCode(code),
      prefix: tsxFiles[0].split('.')[0]
    };
    console.log(`Found ${componentClasses[comp].classes.size} classes for ${comp}`);
  }
});

const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
const root = postcss.parse(globalsCss);

const componentAsts = {};
components.forEach(comp => { componentAsts[comp] = postcss.root(); });

const animationsUsedByComp = {};
components.forEach(comp => { animationsUsedByComp[comp] = new Set(); });

const rulesToRemove = new Set();
let removedCount = 0;

root.walkRules(rule => {
  const matchedComps = new Set();
  
  selectorParser(selectors => {
    selectors.walkClasses(classNode => {
      components.forEach(comp => {
        if (componentClasses[comp] && componentClasses[comp].classes.has(classNode.value)) {
          matchedComps.add(comp);
        }
      });
    });
  }).processSync(rule.selector);

  if (matchedComps.size > 0) {
    removedCount++;
    rule.walkDecls(decl => {
      if (decl.prop.includes('animation')) {
        matchedComps.forEach(comp => {
          if (decl.value.includes('vh-shimmer')) animationsUsedByComp[comp].add('vh-shimmer');
          if (decl.value.includes('spin')) animationsUsedByComp[comp].add('spin');
        });
      }
    });

    matchedComps.forEach(comp => {
      let nodeToAdd = rule.clone();
      if (rule.parent && rule.parent.type === 'atrule') {
        const wrapper = rule.parent.clone().removeAll();
        wrapper.append(nodeToAdd);
        nodeToAdd = wrapper;
      }
      componentAsts[comp].append(nodeToAdd);
    });

    rulesToRemove.add(rule);
  }
});

console.log(`Found ${removedCount} matching rules in CSS.`);

root.walkAtRules('keyframes', rule => {
  let isUsed = false;
  components.forEach(comp => {
    if (animationsUsedByComp[comp].has(rule.params)) {
      componentAsts[comp].append(rule.clone());
      isUsed = true;
    }
  });
  if (isUsed) rulesToRemove.add(rule);
});

rulesToRemove.forEach(rule => {
  const parent = rule.parent;
  rule.remove();
  if (parent && parent.type === 'atrule' && parent.nodes.length === 0) {
    parent.remove();
  }
});

components.forEach(comp => {
  if (componentAsts[comp] && componentAsts[comp].nodes.length > 0) {
    const compData = componentClasses[comp];
    const cssPath = path.join(componentsDir, comp, `${compData.prefix}.css`);
    fs.writeFileSync(cssPath, componentAsts[comp].toString());
  }
});

fs.writeFileSync(globalsCssPath, root.toString());
