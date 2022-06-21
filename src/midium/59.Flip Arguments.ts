type Reverse<T extends any[], R extends any[] = []> = T extends [
  ...infer A,
  infer B
]
  ? Reverse<A, [...R, B]>
  : R;

type FlipArguments<T> = T extends (...args: [...infer A]) => void
  ? (...args: Reverse<A>) => void
  : "";

type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void

export {};
