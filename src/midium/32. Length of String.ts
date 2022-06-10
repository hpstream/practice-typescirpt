// type LengthOfString<S extends string, N extends any[] = []> = S extends ""
//   ? N["length"]
//   : S extends `${S[0]}${infer R}`
//   ? LengthOfSting<R, [...N, S[0]]>r
//   : never;

type LengthOfSting<
  S extends string,
  L extends any[] = []
> = S extends `${infer f}${infer R}`
  ? LengthOfSting<R, [...L, f]>
  : L["length"];

type s = LengthOfSting<"we">;

export {};
