type Flatten<T extends any[], R extends any[] = []> = T extends [
  infer A,
  ...infer Res
]
  ? A extends any[]
    ? Flatten<Res, [...R, ...Flatten<A>]>
    : Flatten<Res, [...R, A]>
  : R;

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
