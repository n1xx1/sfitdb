set -e

# go version
rm -rf public/*
hugo --minify
node --experimental-strip-types ./scripts/dev-helper.ts
