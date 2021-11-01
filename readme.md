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

// Use the lenient option to allow URLs without a protocol.
isUrl('unicorn', {lenient: true});
//=> true
```

## API

### isUrl(string, options?)

#### options

Type: `object`

##### lenient

Type: `boolean`\
Default: `false`

Whether URLs without a protocol should be allowed.

## Related

- [is](https://github.com/sindresorhus/is) - Type check values
