import os
import os.path
import shutil
import sys
import re
from datetime import date

# Print help message
if len(sys.argv) == 1 or sys.argv[1] in ('-h', '--help'):
    print("Usage: python convert-md.py path/to/md/file.md post_category")
    sys.exit()

if len(sys.argv) < 3:
    print("Must provide a path to the file and a post category")
    sys.exit()

path_to_file = sys.argv[1]
post_category = sys.argv[2]

if not os.path.exists(path_to_file):
    print("Provided file path does not exist")
    sys.exit()
if not path_to_file.endswith(".md"):
    print("Provided file does not have a .md extension")
    sys.exit()

# Extract raw file name
match = re.search(r".*/(.*)\.md", path_to_file)
raw_file_name = match.group(1)

# Try to extract the first H1 title
title_from_heading = None
with open(path_to_file) as post_file:
    for line in post_file:
        if line.strip().startswith("# "):
            title_from_heading = line.strip()[2:].strip()
            break

# Fallback to file name if no heading
final_title = title_from_heading if title_from_heading else raw_file_name.replace("-", " ").replace("_", " ")
file_name_slug = title_from_heading.lower().strip().replace(" ", "-").replace("_", "-") if title_from_heading else raw_file_name.replace(" ", "-").replace("_", "-").replace("'", "").replace('"', "")

# Date info
today = date.today()
new_file_name = today.strftime("%Y-%m-%d-") + file_name_slug

# Paths
img_path_root = "./assets/img"
new_img_dir = f"{img_path_root}/{new_file_name}/"
new_post_dir = f"./_posts/{post_category}/"
os.makedirs(new_post_dir, exist_ok=True)

# Write header
output_path = os.path.join(new_post_dir, f"{new_file_name}.md")
out = open(output_path, "w")
out.write("---\n")
out.write("layout: post\n")
out.write(f'title: "{final_title}"\n')
out.write("image: \n")
out.write(f"category: {post_category}\n")
out.write(f"tag: {post_category}\n")
out.write("---\n\n")

# Read full post file
with open(path_to_file) as post_file:
    lines = post_file.readlines()

# Write body with caption detection
i = 0
while i < len(lines):
    line = lines[i]
    if line.strip().startswith("# ") and title_from_heading and line.strip()[2:].strip() == title_from_heading:
        i += 1  # Skip the title line in the body
        continue

    img_match = re.findall(r"!\[(.*?)\]\((.*?)\)", line)
    if img_match:
        alt_tag = img_match[0][0].replace("-", " ").replace("_", " ")
        src_path = img_match[0][1]
        img_name = os.path.basename(src_path)
        img_name_sanitized = img_name.replace(" ", "-").replace("_", "-")

        os.makedirs(new_img_dir, exist_ok=True)
        target = os.path.join(new_img_dir, img_name_sanitized)
        shutil.move(src_path, target)

        out.write(f"![{alt_tag}]({target[1:]})\n")

        # Find caption on next non-empty line
        caption = "CAPTION GOES HERE"
        j = i + 1
        while j < len(lines):
            next_line = lines[j].strip()
            if next_line:
                caption = next_line
                break
            j += 1

        out.write("\n" + caption + "\n")
        out.write("{: .caption}\n")
        i = j  # skip caption line next iteration
    else:
        out.write(line)
    i += 1

out.close()
print(f"Blog post '{final_title}' generated successfully!")
