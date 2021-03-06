import * as React from 'react';
import { App } from './react';

const CONSTANT_NUMBER: number = 5;

/**
 * Here is the docstring.
 * @param b Here is a parameter
 */
export const test = (b: number): React.Component => {
  const a: number = 5;
  test(b);
  // Look, a comment!
  console.log(a + b + CONSTANT_NUMBER);
  console.log([1,2,3,4].map(a => a+1).reduce((curr, acc) => curr+acc));
  console.log(`This is a test: ${a + 5}`);
  console.log(`what is this? ${this[test(b)] + 4}`);
  if (a) {
    console.log('a');
  } else {}
  try {
    const c = {
      a: 'test',
      "b": {
        c: test
      }
    }
  } catch (e) {
    throw new Error();
  }
  a.toString();
  return new App();
}
