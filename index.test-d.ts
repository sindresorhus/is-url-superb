import {expectType} from 'tsd';
import isUrlSuperb = require('.');

expectType<boolean>(isUrlSuperb('https://sindresorhus.com'));
