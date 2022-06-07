type Concat<T extends any[], K extends any[]> = [...T, ...K];

type Result = Concat<[1], [2]>;
