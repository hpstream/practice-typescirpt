type Foo = {
  [key: string]: any;
  foo(): void;
};

type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer S}` ? S : never]: T[P];
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

export {};
