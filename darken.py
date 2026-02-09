import os
import re

replacements = [
    (r'bg-white', 'bg-black'),
    (r'bg-slate-50', 'bg-black'),
    (r'bg-slate-100', 'bg-onyx-surface'),
    (r'bg-background-light', 'bg-background-dark'),
    (r'text-slate-900', 'text-white'),
    (r'text-slate-800', 'text-slate-200'),
    (r'text-slate-700', 'text-slate-300'),
    (r'border-slate-200', 'border-onyx-border'),
    (r'dark:bg-surface-dark', 'bg-onyx-surface'),
    (r'dark:bg-background-dark', 'bg-background-dark'),
    (r'dark:border-border-dark', 'border-onyx-border'),
]

def darken(filename):
    with open(filename, 'r') as f:
        content = f.read()

    for pattern, repl in replacements:
        content = re.sub(pattern, repl, content)

    # Also handle some specific cases found in workspace.png
    # Like bg-[#15161e] or similar if they exist

    with open(filename, 'w') as f:
        f.write(content)

for f in os.listdir('src/pages'):
    if f.endswith('.tsx'):
        darken(f'src/pages/{f}')
