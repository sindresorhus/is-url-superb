import {expectType} from 'tsd';
import isUrlSuperb = require('.');

expectType<boolean>(isUrlSuperb('http://todomvc.com'));
