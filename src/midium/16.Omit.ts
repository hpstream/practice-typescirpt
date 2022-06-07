interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type SetDifference<A, B> = A extends B ? never : A;
type MyOmit<T, K extends keyof T> = Pick<T, SetDifference<K, keyof T>>;

// type sss = Pick<Todo, "completed" | "description">;

type TodoPreview = MyOmit<
  Todo,
  SetDifference<keyof Todo, "description" | "title">
>;

const todo: TodoPreview = {
  completed: false,
};

export {};
