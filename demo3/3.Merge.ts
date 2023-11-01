// 并集

type Compute<A extends any> = A extends Function ? A : { [K in keyof A]: A[K] };

type Merge<O1 extends object, O2 extends object> = Compute<
  O1 & Omit<O2, keyof O1>
>;

type cA = { name: string; age: number; visible: boolean };

type cB = { age: number; visible: number; sex: boolean };

type DiffProps = Merge<cA, cB>