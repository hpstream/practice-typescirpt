type DropChar<C, S, V extends string = ""> = C extends `${infer A}${infer R}`
  ? A extends S
    ? DropChar<R, S, V>
    : DropChar<R, S, `${V}${A}`>
  : V;

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

export {};
