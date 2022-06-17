interface User {
  name?: string;
  age?: number;
  address?: string;
}
type Computed<T> = {
  [K in keyof T]: T[K];
};
type RequiredByKeys<T, K extends keyof T> = Computed<
  Omit<T, K> & Required<Pick<T, K>>
>;

type UserPartialName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }

export {};
