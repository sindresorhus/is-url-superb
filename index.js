import isDomain from 'is-valid-domain';

export default function isUrl(string, {lenient = false} = {}) {
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
		if (lenient && isDomain(string) === true) {
			return true;
		}

		return false;
	}
}
