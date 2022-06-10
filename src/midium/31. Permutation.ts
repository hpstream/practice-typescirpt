type Permutation<T extends keyof any> = [T] extends [never]
  ? [] // ending condition
  : {
      [P in T]: [P, ...Permutation<T extends P ? never : T>];
    }[T];

type Permutation1<T extends keyof any> = [T] extends [never]
  ? []
  : {
      [P in T]: [P, ...Permutation1<Exclude<T, P>>];
    }[T];

type perm1 = Permutation1<"A" | "B" | "D">;

type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

export {};
