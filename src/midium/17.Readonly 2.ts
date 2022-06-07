interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type Compute<A extends any> = A extends Function ? A : {[K in keyof A]: A[K]};
type SetDifference<A, B> = A extends B ? never : A;
type MyReadonly2<T, K extends keyof T> = Compute<
  {
    readonly [p in K]: T[p];
  } & {
    [p in SetDifference<keyof T, K>]: T[p];
  }
>;
const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK

export {};
