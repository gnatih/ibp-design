#!/usr/bin/env sh

set -e
npx mix --production

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:gnatih/ibp-design.git main:gh-pages
cd -