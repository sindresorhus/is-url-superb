import test from 'ava';
import isUrl from './index.js';

test('main', t => {
	t.true(isUrl('https://sindresorhus.com'));
	t.true(isUrl('  https://sindresorhus.com  '));
	t.false(isUrl('abc https://sindresorhus.com'));
	t.false(isUrl('https://sindresorhus.com abc'));
	t.false(isUrl('https://sindresorhus.com/abc def'));
	t.false(isUrl('//sindresorhus.com'));
	t.false(isUrl('localhost'));
	t.false(isUrl('192.168.0.1'));
	t.false(isUrl('www.example.com'));
});

test('lenient option', t => {
	t.true(isUrl('https://sindresorhus.com', {lenient: true}));
	t.true(isUrl('  https://sindresorhus.com  ', {lenient: true}));
	t.false(isUrl('abc https://sindresorhus.com', {lenient: true}));
	t.false(isUrl('https://sindresorhus.com abc', {lenient: true}));
	t.false(isUrl('https://sindresorhus.com/abc def', {lenient: true}));
	t.true(isUrl('//sindresorhus.com', {lenient: true}));
	t.true(isUrl('localhost', {lenient: true}));
	t.true(isUrl('192.168.0.1', {lenient: true}));
	t.true(isUrl('www.example.com', {lenient: true}));
});
