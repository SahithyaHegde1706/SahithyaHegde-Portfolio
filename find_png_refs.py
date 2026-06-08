import re
from pathlib import Path
pattern = re.compile(r'hack-with-mumbai\.png|bv-hacks\.png|code-clash\.png|simverse-hackathon\.png|hackhive\.png|signly/thumbnail\.png|cloudnest/thumbnail\.png|skillbridge/thumbnail\.png|trackflow/thumbnail\.png')
exts={'.ts','.tsx','.js','.jsx','.mdx','.json','.xml','.yaml','.yml','.txt'}
root = Path('.')
for p in root.rglob('*'):
    if not p.is_file():
        continue
    if p.suffix.lower() in exts or p.name in {'content-collections.ts','sitemap.xml'}:
        try:
            text = p.read_text(encoding='utf-8')
        except Exception:
            continue
        for i, line in enumerate(text.splitlines(), 1):
            for m in pattern.finditer(line):
                print(f'{p}|{i}|{m.group(0)}|{line.strip()}')
