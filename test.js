import test from 'ava';
import isUrlSuperb from '.';

test('main', t => {
	t.true(isUrlSuperb('//todomvc.com'));
	t.true(isUrlSuperb('http://todomvc.com'));
	t.false(isUrlSuperb('abc http://todomvc.com'));
});
