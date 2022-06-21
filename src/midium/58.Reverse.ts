type Reverse<T extends any[], R extends any[] = []> = T extends [
  ...infer A,
  infer B
]
  ? Reverse<A, [...R, B]>
  : R;

type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']

export {};
