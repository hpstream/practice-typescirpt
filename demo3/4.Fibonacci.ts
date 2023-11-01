// 1,1,2,3,5,8,13,21

type Fibonacci<
  T,
  R extends number[] = [1],
  C extends number[] = [1], 
  P extends number[] = []
> = T extends R["length"]
  ? C["length"]
  : Fibonacci<T, [...R, 1], [...C, ...P], [...C]>;

type Result1 = Fibonacci<10>; // 2
type Result2 = Fibonacci<6>; // 21


// 1, [1],[1],[]

// 2, [1,1],[1],[1];

// 3, [1,1,1],[1,1],[1];

// 4, [1,1,1,1],[1,1,1],[1,1];

// 5, [1,1,1,1,1],[1,1,1,1,1],[1,1,1];

// 6, [1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1];

export {};

// 题目：https://github.com/type-challenges/type-challenges/tree/main