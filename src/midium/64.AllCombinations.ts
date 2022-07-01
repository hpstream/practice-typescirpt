type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : T;

type AllCombinations<
  S extends string,
  U extends string = StringToUnion<S>,
  P extends string = U
> =
  | U
  | (P extends any
      ? `${P}${AllCombinations<S, U extends P ? never : U>}`
      : never);

type s = StringToUnion<"ABC">;
type AllCombinations_ABC = AllCombinations<"AB">;

export {};
