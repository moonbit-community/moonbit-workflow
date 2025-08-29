fmt-json: 
    find . -name *.mod.json -exec npx prettier --write {} \;
    find . -name *.pkg.json -exec npx prettier --write {} \;
    