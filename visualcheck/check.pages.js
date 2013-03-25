var 
morpage = require('webpage').create(),
gitpage = require('webpage').create(),
count = 0;

function checkCompletion () {
	count++
	if (count >= 2) 
		phantom.exit();
}

// mor page
morpage.open('http://www.meetup.com/Monster-on-Rails-Web-Development-Meetup-Muenster/', function () {
	morpage.render('pngs/mor.png');
	checkCompletion();
});

// git page
gitpage.open('http://github.com/', function () {
	gitpage.render('pngs/git.png');
	checkCompletion();
});