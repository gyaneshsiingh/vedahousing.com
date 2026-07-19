import re
import os

with open('src/app/globals.css', 'r') as f:
    css = f.read()

mapping = {
    'vh-card': 'PropertyCard',
    'pc-': 'PropertyCard',
    'vh-stat': 'Stats',
    'vh-popup': 'Interior', # or Portfolio, let's put in Portfolio
    'vh-login': 'Header',
    'vh-chip': 'PropertyCard',
    'vh-meta': 'PropertyCard',
    'vh-header': 'Header',
    'vh-footer': 'Footer',
    'vh-hero': 'Hero',
    'vh-interior': 'Interior',
    'vh-approach': 'Interior',
    'vh-cta': 'ContactCTA',
    'vh-design': 'Interior',
    'vh-style': 'Interior',
    'pf-': 'PropertyFilters',
    'vh-services': 'Services',
    'vh-service': 'Services',
    'vh-profile': 'Portfolio',
}

# we want to extract rules that match these prefixes.
# A regex to match CSS rules:
# This regex matches a CSS rule. It is a bit complex.
# We can use a simpler approach: use postcss to do this perfectly.
