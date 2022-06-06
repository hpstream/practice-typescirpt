type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

type ss = MyAwaited<Promise<number>>;
