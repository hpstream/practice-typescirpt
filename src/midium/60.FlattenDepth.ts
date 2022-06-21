type FlattenDepth<
  T extends any[],
  C extends number = 1,
  V extends any[] = [],
  L extends any[] = []
> = C extends L["length"]
  ? T
  : T extends [infer A, ...infer R]
  ? A extends any[]
    ? FlattenDepth<R, C, [...V, ...A], L>
    : FlattenDepth<R, C, [...V, A], L>
  : FlattenDepth<V, C, [], [...L, 1]>;

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

export {};
