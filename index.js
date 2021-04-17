export default function isUrl(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	string = string.trim();
	if (string.includes(' ')) {
		return false;
	}

	try {
		new URL(string); // eslint-disable-line no-new
		return true;
	} catch {
		return false;
	}
}
