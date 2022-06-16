type StartsWith<M, N> = N extends `${infer F}${infer R}`
  ? M extends `${infer F1}${infer R1}`
    ? F extends F1
      ? StartsWith<R1, R>
      : false
    : false
  : true;

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

export {};
