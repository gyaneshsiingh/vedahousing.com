import os
import re

components_dir = "src/app/components"
globals_css_path = "src/app/globals.css"

with open(globals_css_path, "r") as f:
    globals_css = f.read()

# Naive CSS parser to get blocks
# A block is selector { rules }
css_blocks = []
# This regex matches a selector, and then matches nested brackets using a simple balanced bracket approach or just capturing everything up to the first '}' that is at the root level.
# Actually, since media queries exist, a block might contain nested {}.
# Let's use a simpler approach: track open brackets.
def parse_css(css_text):
    blocks = []
    current_block = ""
    bracket_level = 0
    in_comment = False
    i = 0
    while i < len(css_text):
        if css_text[i:i+2] == "/*" and not in_comment:
            in_comment = True
            current_block += css_text[i:i+2]
            i += 2
            continue
        if css_text[i:i+2] == "*/" and in_comment:
            in_comment = False
            current_block += css_text[i:i+2]
            i += 2
            continue
        
        char = css_text[i]
        current_block += char
        
        if not in_comment:
            if char == "{":
                bracket_level += 1
            elif char == "}":
                bracket_level -= 1
                if bracket_level == 0:
                    blocks.append(current_block.strip())
                    current_block = ""
        i += 1
    if current_block.strip():
        blocks.append(current_block.strip())
    return blocks

all_blocks = parse_css(globals_css)

global_blocks_to_keep = []
blocks_by_component = {}

for comp in os.listdir(components_dir):
    comp_path = os.path.join(components_dir, comp)
    if not os.path.isdir(comp_path):
        continue
    
    # find tsx files
    tsx_files = [f for f in os.listdir(comp_path) if f.endswith(".tsx") or f.endswith(".js")]
    if not tsx_files:
        continue
    
    comp_name_lower = comp.lower()
    
    tsx_file = tsx_files[0]
    tsx_path = os.path.join(comp_path, tsx_file)
    with open(tsx_path, "r") as f:
        content = f.read()
    
    # Extract class names
    classnames = set()
    matches = re.findall(r'className=["\']([^"\']+)["\']', content)
    for match in matches:
        for cls in match.split():
            classnames.add(cls)
            
    blocks_by_component[comp] = {
        'classes': classnames,
        'blocks': [],
        'tsx_path': tsx_path,
        'tsx_content': content
    }

# Distribute blocks
for block in all_blocks:
    if block.startswith("@media"):
        # Handle media queries by checking if inner rules match
        # If any inner rule matches a component, we add the media query for that component
        # For simplicity, we just check if any of the classnames appear in the block text
        matched_comps = []
        for comp, data in blocks_by_component.items():
            for cls in data['classes']:
                if f".{cls}" in block:
                    matched_comps.append(comp)
                    break
        if not matched_comps:
            global_blocks_to_keep.append(block)
        else:
            for comp in matched_comps:
                blocks_by_component[comp]['blocks'].append(block)
            # If multiple matched, we duplicated the media query. That's fine for modules.
    else:
        # Check if block selector contains any of the classnames
        matched_comps = []
        # get selector
        selector = block.split("{")[0]
        for comp, data in blocks_by_component.items():
            for cls in data['classes']:
                if f".{cls}" in selector:
                    matched_comps.append(comp)
                    break
        if not matched_comps:
            global_blocks_to_keep.append(block)
        else:
            # assign to first matched component
            blocks_by_component[matched_comps[0]]['blocks'].append(block)

# Write output
for comp, data in blocks_by_component.items():
    comp_name = comp
    comp_file_prefix = data['tsx_path'].split("/")[-1].split(".")[0]
    
    if data['blocks']:
        css_path = os.path.join(components_dir, comp, f"{comp_file_prefix}.modules.css")
        with open(css_path, "w") as f:
            f.write("\n\n".join(data['blocks']) + "\n")
            
        # Update TSX to import CSS
        if f"import './{comp_file_prefix}.modules.css'" not in data['tsx_content']:
            import_statement = f"import './{comp_file_prefix}.modules.css';\n"
            # insert after last import
            lines = data['tsx_content'].split("\n")
            last_import_idx = -1
            for idx, line in enumerate(lines):
                if line.startswith("import "):
                    last_import_idx = idx
            
            if last_import_idx != -1:
                lines.insert(last_import_idx + 1, import_statement)
            else:
                lines.insert(0, import_statement)
            
            with open(data['tsx_path'], "w") as f:
                f.write("\n".join(lines))
    
    # create types file
    type_path = os.path.join(components_dir, comp, f"{comp_file_prefix}.type.ts")
    if not os.path.exists(type_path):
        with open(type_path, "w") as f:
            f.write(f"export interface {comp}Props {{\n  // Add props here\n}}\n")
            
    # create constants file
    const_path = os.path.join(components_dir, comp, f"{comp_file_prefix}.constants.ts")
    if not os.path.exists(const_path):
        with open(const_path, "w") as f:
            f.write(f"export const {comp.upper()}_CONSTANTS = {{\n  // Add constants here\n}};\n")

# write remaining global css
with open(globals_css_path, "w") as f:
    f.write("\n\n".join(global_blocks_to_keep) + "\n")

print("Done extracting CSS, types, and constants!")
