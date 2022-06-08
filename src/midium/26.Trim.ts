type Empty = " ";
type TrimLeft<T extends string> = T extends `${Empty}${infer res}`
  ? TrimLeft<res>
  : T;

type TrimRight<T extends string> = T extends `${infer res}${Empty}`
  ? TrimLeft<res>
  : T;

type Trim<T extends string> = TrimLeft<TrimRight<T>>;

type trimmed = Trim<" Hello World ">; // expected to be 'Hello World'

export {};
