# Automated Release with release-it

The package.json contains a script called `release`. Here are some examples of how to use it:

1. npm run release
1. npm run release --dry-run
1. npm run release --preRelease=beta

You can configure release-it with the `.release-it.json` file.

## GitHub

1. Obtain a personal access token (release-it only needs "repo" access; no "admin" or other scopes).
1. Configure github.release: true
1. Make sure the token is available as an environment variable.

## NPM

See: https://www.npmjs.com/package/release-it#publish-to-npm
See: https://github.com/release-it/release-it/blob/HEAD/docs/npm.md

# Manual Release

1. Build the release. Run all tests. Everything looking good? Great!
1. Update the CHANGELOG.md.
1. Increment the version in `package.json`. Follow semantic versioning if possible (e.g., `MAJOR.MINOR.PATCH`).
1. git commit with a message specifying the version.
1. git tag so that this version can be accessed in the future.
1. git push to the main branch of the repository.
1. Release to GitHub with a personal access token with **repo** access. The GITHUB_TOKEN needs to be available as an environment variable. For example: `export GITHUB_TOKEN="f941e0..."`
1. Celebrate 🥳 !
