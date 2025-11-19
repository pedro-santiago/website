#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

source config

NODE_ENV="production" NODE_OPTIONS="--openssl-legacy-provider" node_modules/.bin/webpack-dev-server --hot --inline --open -d
