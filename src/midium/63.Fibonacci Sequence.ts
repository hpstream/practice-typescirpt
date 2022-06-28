// 1,1,2,3,5,8,13,21

type Add<
  A,
  B,
  AR extends number[] = [],
  BR extends number[] = []
> = A extends AR["length"]
  ? B extends BR["length"]
    ? [...AR, ...BR]["length"]
    : Add<A, B, AR, [...BR, 1]>
  : Add<A, B, [...AR, 1], BR>;

type a1 = Add<0, 1>;
type b1 = Add<3, 8>;
type Fibonacci<
  T,
  R extends number[] = [1],
  C extends number[] = [1],
  P extends number[] = []
> = T extends R["length"]
  ? C["length"]
  : Fibonacci<T, [...R, 1], [...C, ...P], [...C]>;

type Result1 = Fibonacci<10>; // 2
type Result2 = Fibonacci<8>; // 21

export {};
