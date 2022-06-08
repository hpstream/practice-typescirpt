type ReplaceAll<
  S extends string,
  P extends string,
  V extends string
> = S extends `${infer pre}${P}${infer next}`
  ? `${pre}${V}${ReplaceAll<next, P, V>}`
  : S;

// type ReplaceAll<S extends string, P extends string, V extends string> = Replace<
//   S,
//   P,
//   V
// >;
type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

export {};
