# is-url-superb

> Check if a string is a URL

## Install

```
$ npm install is-url-superb
```

## Usage

```js
import isUrl from 'is-url-superb';

isUrl('https://sindresorhus.com');
//=> true

isUrl('unicorn');
//=> false

// Enable lenient mode to automatically prepend `https://` to the input in case it has no protocol defined.
isUrl('unicorn', {lenient: true});
//=> true
```

## Related

- [is](https://github.com/sindresorhus/is) - Type check values
