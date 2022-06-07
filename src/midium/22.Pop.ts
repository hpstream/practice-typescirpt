type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type Pop<T, A extends any[] = []> = T extends [...infer res, infer first]
  ? Pop<res, [...A, first]>
  : A;
type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]

export {};
