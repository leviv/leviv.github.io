import os
import os.path
import shutil
import sys
import re
from datetime import date

# Print a help message if user types no arguments or -h/--help
if len(sys.argv) == 1 or sys.argv[1] == '-h' or sys.argv[1] == '--help':
  print("Usage: python convert-md.py path/to/md/file.md post_category")
  sys.exit()

# Check we have both arguments
if len(sys.argv) < 3:
  print("Must provide a path to the file and a post category")
  sys.exit()

path_to_file = sys.argv[1]
post_category = sys.argv[2]

# Check if the file exists and is a markdown file
if not os.path.exists(path_to_file):
  print("Provided file path does not exist")
  sys.exit()
if not path_to_file.endswith(".md"):
  print("Provided file does not have a .md extension")
  sys.exit()

# Extract the file name and file path
match = re.search(".*\/(.*).md", path_to_file)
file_name = match.group(1)
file_name_sanitized = file_name.replace(" ", "-").replace("_", "-")
file_path_prefix = path_to_file[0:len(path_to_file)-len(file_name)-2]

# Sometimes I add a title in the md file, sometimes I dont
# If I added a title (h1) to the document, use that for the file name
with open(path_to_file) as post_file:
    line = post_file.readline().rstrip()
    if line.startswith("#"):
       file_name_sanitized = line[2:len(line)]

# Get todays date correctly formatted
todays_date = date.today()
day = '{:02d}'.format(todays_date.day)
month = '{:02d}'.format(todays_date.month)
year = todays_date.year
new_file_name = str(year) + "-" + str(month) + "-" + str(day) + "-" + file_name_sanitized

new_img_path = "./assets/img/" + new_file_name + "/"

# Open the new file
new_file_path = "./_posts/" + post_category + "/"
# Create post directory if doesn't exist
if not os.path.exists(new_file_path):
  os.makedirs(new_file_path)
f = open(new_file_path + new_file_name + ".md", "w")

# Write the template header
title = file_name.replace("-", " ").replace("_", " ")
f.write("---\n")
f.write("layout: post\n")
f.write('title: "' + title  + '"\n')
f.write("category: " + post_category + "\n")
f.write("miscellaneous: " + post_category + "\n")
f.write("---\n\n")

# Loop through file to find images
with open(path_to_file) as post_file:
  for line in post_file:
    img_match = re.findall("!\[(.*)\]\((.*)\)", line) # Check for pattern ![alt](path)
    # This line is an image
    if len(img_match) > 0:
      alt_tag = img_match[0][0].replace("-", " ").replace("_", " ")
      img_path = img_match[0][1]
      img_name = re.findall(".*\/(.*\..*)", img_path)[0] # Get the img name from path/to/file.jpg
      img_name_sanitized = img_name.replace(" ", "-").replace("_", "-")

      # Create image directory if doesn't exist
      if not os.path.exists(new_img_path):
        os.makedirs(new_img_path)

      new_img_path = new_img_path + img_name_sanitized

      # Move the image to a new directory
      shutil.move(img_path, new_img_path)

      # Write the new image code
      f.write("![" + alt_tag + "](" + new_img_path + ")\n")
      # I use a custom class (.caption) to style the text under images
      f.write("\nCAPTION_GOES_HERE\n")
      f.write("{{: .caption}}") # Escape { and }
    else:
      f.write(line)

# Close file stream
f.close()
print("Blog post successfully generated! Nice work :)")
