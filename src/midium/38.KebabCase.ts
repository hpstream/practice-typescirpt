// FooBarBaz -> foo-bar-baz

type KebabCase<
  T extends string,
  V extends string = ""
> = T extends `${infer A}${infer B}`
  ? Lowercase<A> extends A
    ? KebabCase<B, `${V}${A}`>
    : KebabCase<B, V extends "" ? Lowercase<A> : `${V}-${Lowercase<A>}`>
  : V;

type test = KebabCase<"FooBarBaz">;

export {};
