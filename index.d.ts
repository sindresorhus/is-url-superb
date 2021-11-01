export interface Options {
	/**
	Whether URLs without a protocol should be allowed.

	@default false

	@example
	```
    import isUrl from 'is-url-superb';

	isUrl('www.example.com');
	//=> false

	isUrl('www.example.com', {lenient: true});
	//=> true
	```
	*/
	readonly lenient?: boolean;
}

/**
Check if a string is a URL.

@example
```
import isUrl from 'is-url-superb';

isUrl('https://sindresorhus.com');
//=> true

isUrl('unicorn');
//=> false

// Use the lenient option to allow URLs without a protocol.
isUrl('unicorn', {lenient: true});
//=> true
```
*/
export default function isUrl(url: string, options?: Options): boolean;
