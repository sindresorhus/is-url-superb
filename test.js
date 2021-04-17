import test from 'ava';
import isUrl from './index.js';

test('main', t => {
	t.true(isUrl('https://sindresorhus.com'));
	t.true(isUrl('  https://sindresorhus.com  '));
	t.false(isUrl('abc https://sindresorhus.com'));
	t.false(isUrl('https://sindresorhus.com abc'));
	t.false(isUrl('https://sindresorhus.com/abc def'));
});
