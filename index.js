'use strict';
var urlRegex = require('url-regex');
var re = new RegExp('^' + urlRegex().source + '$', 'i');

module.exports = function (url) {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string');
	}

	return re.test(url.trim());
};
