var casper = require('casper').create();
casper.start('http://substack.net/', function() {
	this.test.assertExists('#logo', 'the element exists');
});

casper.run(function() {
	this.test.done(1);
	this.test.renderResults(true);
});