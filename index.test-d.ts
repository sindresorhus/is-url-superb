import {expectType} from 'tsd';
import isUrl from './index.js';

expectType<boolean>(isUrl('https://sindresorhus.com'));
