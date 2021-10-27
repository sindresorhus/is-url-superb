/**
Check if a string is a URL.

@example
```
import isUrl from 'is-url-superb';

isUrl('https://sindresorhus.com');
//=> true

isUrl('unicorn');
//=> false

// Enable lenient mode to automatically prepend `https://` to the input in case it has no protocol defined.
isUrl('unicorn', {lenient: true});
//=> true
```
*/
export default function isUrl(
	url: string,
	options?: {
		/**
		 * Wether it should automatically prepend `https://` in case the input has no protocol defined.
		 *
		 * @example
		 * isUrl('www.example.com');
		 * //=> false
		 *
		 * isUrl('www.example.com', { lenient: true });
		 * //=> true
		 *
		 * @default
		 * false
		 */
		lenient: boolean;
	}
): boolean;
