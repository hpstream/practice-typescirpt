type Empty = " ";
type TrimLeft<T extends string> = T extends `${Empty}${infer res}`
  ? TrimLeft<res>
  : T;

type trimed = TrimLeft<"    Hello World  ">; // expected to be 'Hello World  '
