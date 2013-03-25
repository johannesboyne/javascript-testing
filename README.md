javascript-testing
==================

Testing JavaScript code (a how to &amp; 'personal best practice')

# THE NR.1: differentiate between unit and integration tests

this is a unit test

```javascript
describe('test if the program calculates right', function () {
	it('1 == 1', function () {
		assert.equal(1, 1);
	});
});
```

this is an integration test

```javascript
casper.start('http://substack.net/', function() {
	this.test.assertExists('#logo', 'the element exists');
});
casper.run(function() {
	this.test.done(1);
	this.test.renderResults(true);
});
```

## (fe) Unit tests (mocha-phantomjs)

```javascript
describe('test if the program calculates right', function () {
	it('1 == 1', function () {
		assert.equal(1, 1);
	});
});
```

output

```shell
$ mocha-phantomjs -R dot test.fe.html

  ․

  1 test complete (7 ms)
```

## (fe) Integration tests

### casperjs

```javascript
var casper = require('casper').create();
casper.start('http://substack.net/', function() {
	this.test.assertExists('#logo', 'the element exists');
});

casper.run(function() {
	this.test.done(1);
	this.test.renderResults(true);
});
```

output

```shell
$ casperjs csssel.js
PASS the element exists
PASS 1 tests executed in 2.514s, 1 passed, 0 failed.
```
### zombiejs

(personal preference)

```javascript
var 
Browser = require('zombie'),
assert = require('assert');

describe('what?', function () {
	it('should do what...', function (done) {
		var browser = new Browser()
		browser.visit("http://www.googel.de/", function () {
			assert.equal(browser.text("title"), "Google");
			done();
		});
	});
});
```

output

```shell
$ mocha integration.test.js

  ․

  1 test complete (566 ms)
```

try each test runner

```shell
$ make doalltests
``

## Preffered Testframeworks

 * mocha
   * for pure JavaScript testing
 * mocha-phantomjs
   * CLI test runner
 * phantomjs (headless webkit) 	
   * used to produce screen captures
 * zombiejs
   * doing integration tests

## Further reading

* saucelabs.com
* testling-ci
   * testing while pushing
* browserify
   * write your front-end code like your backend code!