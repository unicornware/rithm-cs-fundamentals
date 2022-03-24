#!/bin/bash

# Coverage Workflow
#
# References:
#
# - https://github.com/vercel/serve

yarn test
serve ./coverage/lcov-report -l 5000
