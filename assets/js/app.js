var $ = require('jquery-browserify')

$('document').ready(function() {
	windowHeight = $(window).height();
	$('.how-to-enter').css('margin-top', windowHeight);
});