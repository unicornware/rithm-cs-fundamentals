# Contributing Guide

## Overview

[Getting Started](#getting-started)  
[Contributing Code](#contributing-code)  
[Labels](#labels)  
[Opening Issues](#opening-issues)  
[Pull Requests](#pull-requests)  
[Merge Strategies](#merge-strategies)

## Getting Started

### Yarn

This project uses Yarn 2. The Yarn configuration for this project can be found
in [`.yarnrc.yml`](.yarnrc.yml).

If you're already using Yarn globally, see the [Yarn 2 Migration docs][1].

### Git Configuration

The examples in this guide contain references to custom Git aliases.

See [`.gitconfig`](.github/.gitconfig) for an exhausive list of aliases.

### Clone & Install

```zsh
git clone https://github.com/unicornware/rithm-cs-fundamentals
cd rithm-cs-fundamentals
yarn
```

Note that if you have a global Yarn configuration (or any `YARN_*` environment
variables set), an error will be displayed in the terminal if any settings
conflict with the project's Yarn configuration, or the Yarn 2 API.

## Contributing Code

[Husky][2] is used to run Git hooks that locally enforce coding and commit
message standards, as well as run tests associated with any files changed since
the last commit.

### Commit Messages

This project follows [Conventional Commit][3] standards and uses [commitlint][4]
to enforce those standards.

This means every commit must conform to the following format:

```zsh
<type>[optional scope]: <description>
 │     │                │
 │     │                └─⫸ summary in present tense; lowercase without period at the end
 │     │
 │     └─⫸ see .commitlintrc.ts
 │
 └─⫸ build|ci|chore|docs|feat|fix|perf|refactor|revert|style|test|wip

[optional body]

[optional footer(s)]
```

`<type>` must be one of the following values:

- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Changes that don't impact external users
- `docs`: Documentation only changes
- `feat`: New features
- `fix`: Bug fixes
- `perf`: Performance improvements
- `refactor`: Code improvements
- `revert`: Revert past changes
- `style`: Changes that do not affect the meaning of the code
- `test`: Adding missing tests or correcting existing tests
- `wip`: Working on changes, but you need to go to bed :wink:

e.g:

- `git docs 'update contributing guide'` -> `docs: update contributing guide`
- `git ac 'refactor(big-o)!: exercises'` -> `refactor(big-o)!: exercises`

See [`.commitlintrc.ts`](.commitlintrc.ts) for an exhasutive list of valid
commit scopes and types.

### Code Style

[Prettier][5] is used to format code, and [ESLint][6] to lint files.

#### Prettier Configurations

- [`.prettierrc.cjs`](.prettierrc.cjs)
- [`.prettierignore`](.prettierignore)

#### ESLint Configurations

- [`.eslintrc.base.cjs`](.eslintrc.base.cjs)
- [`.eslintrc.cjs`](.eslintrc.cjs)
- [`.eslintrc.spec.cjs`](.eslintrc.spec.cjs)
- [`.eslintrc.spellcheck.cjs`](.eslintrc.spellcheck.cjs)
- [`.eslintignore`](.eslintignore)

### Making Changes

Source code is located in [`src`](src) directory.

### Documentation

- JavaScript & TypeScript: [JSDoc][7], linted with [`eslint-plugin-jsdoc`][8]

Before making a pull request, be sure your code is well documented, as it will
be part of your code review.

### Testing

This project uses a [Mocha][9] x [Chai][10] workflow.

[Husky](#contributing-code) is configured to run tests before every push. If you
need to create a new issue regarding a test, or need to make a `wip` commit, use
`it.skip` to mark your tests as [pending][11].

#### Running Tests

- run all test suites: `yarn test`
- run all test suites (with live coverage view): `yarn test:coverage`

### Getting Help

If you need help, make note of any issues in their respective files. Whenever
possible, create a test to reproduce the error. Make sure to label your issue as
`type:question` and `status:help-wanted`.

## Labels

This project uses a well-defined list of labels to organize tickets and pull
requests. Most labels are grouped into different categories (identified by the
prefix, eg: `status:`).

A list of labels can be found in [`.github/labels.yml`](.github/labels.yml).

## Opening Issues

Before opening an issue please make sure, you have:

- read the documentation
- searched open issues for an existing issue with the same topic
- search closed issues for a solution or feedback

If you haven't found a related open issue, or feel that a closed issue should be
re-visited, please open a new issue. A well-written issue has the following
traits:

- follows an [issue template](.github/ISSUE_TEMPLATE)
- is [labeled](#labels) appropriately
- contains a well-written summary of the feature, bug, or problem statement
- contains a minimal, inlined code example (if applicable)
- includes links to prior discussions and resources (if you've found any)

## Pull Requests

When you're ready to have your changes reviewed, open a pull request against the
`next` branch.

Every opened PR should:

- use [**this template**](.github/PULL_REQUEST_TEMPLATE.md)
- reference it's ticket id
- be [labeled](#labels) appropriately
- be assigned to yourself
- give maintainers push access so quick fixes can be pushed to your branch

### Pull Request URL Format

```zsh
https://github.com/unicornware/rithm-cs-fundamentals/compare/next...<branch>
```

where `<branch>` is the name of the branch you'd like to merge into `next`.

## Merge Strategies

In every repository, the `create a merge commit` and `squash and merge` options
are enabled.

- if a PR has a single commit, or the changes across commits are logically
  grouped, use `squash and merge`
- if a PR has multiple commits, not logically grouped, `create a merge commit`

When merging, please make sure to use the following commit message format:

```txt
<type>[optional scope]: <pull-request-title> (#pull-request-n)
 │     │                │
 │     │                └─⫸ check your pull request
 │     │
 │     └─⫸ see .commitlintrc.ts
 │
 └─⫸ build|ci|chore|docs|feat|fix|merge|perf|refactor|release|revert|style|test
```

e.g:

- `feat(big-o): complete topic #1`
- `merge: update contributing guide #2`

[1]: https://yarnpkg.com/getting-started/migration
[2]: https://github.com/typicode/husky
[3]: https://conventionalcommits.org
[4]: https://github.com/conventional-changelog/commitlint
[5]: https://prettier.io
[6]: https://eslint.org
[7]: https://jsdoc.app
[8]: https://github.com/gajus/eslint-plugin-jsdoc
[9]: https://mochajs.org
[10]: https://chaijs.com
[11]: https://mochajs.org/#inclusive-tests
