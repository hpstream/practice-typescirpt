type Unshift<T extends any[], M> = [M, ...T];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]

export {};
