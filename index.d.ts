/**
Check if a string is an URL.

@example
```
import isUrl = require('is-url-superb');

isUrl('http://todomvc.com');
//=> true

isUrl('//todomvc.com');
//=> true

isUrl('unicorn');
//=> false
```
*/
declare function isUrlSuperb(url: string): boolean;

export = isUrlSuperb;
