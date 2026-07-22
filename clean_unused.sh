#!/bin/bash
cd /Users/meghna/Desktop/megzzportfolio

# Loop over all files in public
find public -type f | while read file; do
  basename_file=$(basename "$file")
  # Escape spaces for grep
  # we search for the filename in the src/ or data/ directories.
  # if it's not found, we delete it.
  # Some files might be used in README.md or next.config.ts or layout
  if ! grep -rqF "$basename_file" src README.md next.config.ts; then
    echo "Deleting $file (unused)"
    rm -f "$file"
  fi
done
