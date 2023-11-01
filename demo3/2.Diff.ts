// 差集
type Exclude<A, B> = A extends B ? never : A;

export type Diff<T extends object, U extends object> = Pick<
  T,
  Exclude<keyof T, keyof U>
>;

type cA = { name: string; age: number; visible: boolean };

type cB = { age: number; visible: boolean; sex: boolean };

type DiffProps = Diff<cA, cB>