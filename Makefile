make doalltests:
	mocha-phantomjs -R dot test/test.fe.html;
	casperjs integrationtests_casper/csssel.js;
	mocha integrationtests_zombie/integration.test.js
	phantomjs visualcheck/rasterize.js http://google.com google.png