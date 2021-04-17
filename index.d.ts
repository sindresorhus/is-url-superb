/**
Check if a string is a URL.

@example
```
import isUrl from 'is-url-superb';

isUrl('https://sindresorhus.com');
//=> true

isUrl('//sindresorhus.com');
//=> true

isUrl('unicorn');
//=> false
```
*/
export default function isUrl(url: string): boolean;
