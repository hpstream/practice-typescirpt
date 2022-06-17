type EndsWith<M extends string, N extends string> = M extends `${infer R}${N}`
  ? true
  : false;
type a = EndsWith<"abc", "bc">; // expected to be false
type b = EndsWith<"abc", "ac">; // expected to be true
type c = EndsWith<"abc", "dabc">; // expected to be false

export {};
