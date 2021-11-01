import {expectType} from 'tsd';
import isUrl from './index.js';

expectType<boolean>(isUrl('https://sindresorhus.com'));
expectType<boolean>(isUrl('https://sindresorhus.com', {lenient: false}));
expectType<boolean>(isUrl('https://sindresorhus.com', {lenient: true}));
