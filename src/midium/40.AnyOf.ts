type FalseValue = "" | 0 | [] | Record<string, never> | false;

type isFalse<T> = T extends FalseValue ? true : false;

type AnyOf<T extends any[]> = false extends isFalse<T[number]> ? true : false;

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.

export {};
