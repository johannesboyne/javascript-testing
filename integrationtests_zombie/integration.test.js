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