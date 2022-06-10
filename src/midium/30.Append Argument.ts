type Fn = (a: number, b: string) => number;

type AppendArgument<F, T> = F extends (
  ...args: [...infer A, infer B]
) => infer R
  ? (...args: [...A, T]) => R
  : F;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

export {};
