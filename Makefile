.PHONY: clean check install

APP_DIR=js
TEST_DIR=${APP_DIR}/test
BUNDLE_JS=${APP_DIR}/bundle.js

all: clean check test build

reset: uninstall clean check install test build

check:
	jshint --verbose js/

clean:
	rm -f ${BUNDLE_JS}

install:
	npm install

build:
	browserify . > js/bundle.js

uninstall:
	rm -rf node_modules

test:
	npm test
