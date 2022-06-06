type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
// type First<T extends any[]> = T extends [infer first, ...infer S]
//   ? first
//   : never;

type First<T extends any[]> = T extends [T[0], ...any] ? T[0] : never;
type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
