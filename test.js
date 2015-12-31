import test from 'ava';
import m from './';

test(t => {
	t.true(m('//todomvc.com'));
	t.true(m('http://todomvc.com'));
	t.false(m('abc http://todomvc.com'));
});
