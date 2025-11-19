#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

source config

NODE_OPTIONS="--openssl-legacy-provider" node_modules/.bin/webpack --watch -d
