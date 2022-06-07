type Arr = ["1", "2", "3"];

type TupleToUnion<T, K = never> = T extends [infer first, ...infer R]
  ? TupleToUnion<R, K | first>
  : K;

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
