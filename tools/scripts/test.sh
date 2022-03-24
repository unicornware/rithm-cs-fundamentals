#!/bin/bash

# Testing Workflow
#
# References:
#
# - https://github.com/sindresorhus/trash-cli
# - https://github.com/istanbuljs/nyc
# - https://github.com/entropitor/dotenv-cli
# - https://github.com/piotrwitek/ts-mocha
# - https://mochajs.org/#command-line-usage

# 1. Clear terminal
# 2. Remove stale coverage output
# 3. Load environment variables and run test suites
clear
trash coverage/
dotenv -c=test -- nyc ts-mocha $@
