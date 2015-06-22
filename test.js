'use strict';
var test = require('ava');
var isUrl = require('./');

test(function (t) {
	t.assert(isUrl('//todomvc.com'));
	t.assert(isUrl('http://todomvc.com'));
	t.assert(!isUrl('abc http://todomvc.com'));
	t.end();
});
