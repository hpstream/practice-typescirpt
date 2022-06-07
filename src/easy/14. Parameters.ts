function BB(name: string, age: number) {}
type myParameters<T> = T extends (...args: infer R) => void ? R : never;

type s = Parameters<typeof BB>;

type b = myParameters<typeof BB>;
