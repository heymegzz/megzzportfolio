import os
import re

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return
        
    original = content
    # Replace Ashutosh Singh -> Meghna Nair
    content = re.sub(r'Ashutosh\s+Singh', 'Meghna Nair', content, flags=re.IGNORECASE)
    # Replace Ashutoshx7 -> Meghna Nair
    content = re.sub(r'Ashutoshx7', 'Meghna Nair', content, flags=re.IGNORECASE)
    # Replace Ashutosh_7x7 -> meghna_nair
    content = re.sub(r'Ashutosh_7x7', 'meghna_nair', content, flags=re.IGNORECASE)
    # Replace Ashutosh -> Meghna
    content = re.sub(r'Ashutosh', 'Meghna', content, flags=re.IGNORECASE)
    
    if content != original:
        print(f"Updated {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

for root, _, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root or '.next' in root or 'public' in root:
        continue
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.json', '.md', '.css')):
            process_file(os.path.join(root, file))

