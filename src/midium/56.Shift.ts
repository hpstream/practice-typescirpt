type Result = Shift<[3, 2, 1]>; // [2, 1]

type Shift<T> = T extends [infer A, ...infer R] ? R : T;
export {};
