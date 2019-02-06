#!/bin/sh
echo $PWD
echo $TRAVIS_BUILD_DIR
cd $TRAVIS_BUILD_DIR/public
npm install
npm run build
cd $TRAVIS_BUILD_DIR/server
npm install
npm test
