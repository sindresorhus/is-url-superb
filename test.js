import test from 'ava';
import isUrl from '.';

test('main', t => {
	t.true(isUrl('//sindresorhus.com'));
	t.true(isUrl('https://sindresorhus.com'));
	t.false(isUrl('abc https://sindresorhus.com'));
});
