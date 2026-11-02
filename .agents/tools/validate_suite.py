from pathlib import Path
import sys
import json

root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / "suite.json").read_text(encoding="utf-8"))
skills_root = root / "skills"

errors = []

for skill_name in manifest["skills"]:
    path = skills_root / skill_name / "SKILL.md"
    if not path.exists():
        errors.append(f"Missing: {path}")
        continue

    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        errors.append(f"{skill_name}: YAML frontmatter missing")
    if "name:" not in text:
        errors.append(f"{skill_name}: name missing")
    if "description:" not in text:
        errors.append(f"{skill_name}: description missing")

for rel in manifest["shared_references"]:
    path = skills_root / rel
    if not path.exists():
        errors.append(f"Missing shared reference: {path}")

if errors:
    print("\n".join(errors))
    sys.exit(1)

print(f"OK — {len(manifest['skills'])} AVSM Skills validated.")
