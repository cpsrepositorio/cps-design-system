#!/usr/bin/env sh

# Abort on errors.
set -e

# Run the build process.
yarn build

# Navigate into the output directory.
cd src/.vuepress/dist

# If we start deploying to a custom domain.
# echo 'design-system.cps.sp.gov.br' > CNAME

# Create the deploy repo and commit the files.
git init
git add -A
git commit -m 'chore: deploy'

# Push the deploy to https://cpsrepositorio.github.io/cps-design-system/.
git push -f git@github.com:cpsrepositorio/cps-design-system.git master:gh-pages

# Go back to the original directory.
cd -
