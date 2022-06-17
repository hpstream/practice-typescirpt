interface User {
  name: string;
  age: number;
  address: string;
}

// Pick<T,>
type Computed<T> = {
  [K in keyof T]: T[K];
};
type PartialByKeys<T, K extends keyof T> = Computed<
  Omit<T, K> & Partial<Pick<T, K>>
>;

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }

export {};
