// type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
type MyAwaited<T> = T extends Promise<infer U> ? U : T;

type ss = MyAwaited<Promise<string>>;
