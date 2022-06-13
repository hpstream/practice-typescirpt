type IsNever<T> = [T] extends [never] ? true : false;

type IsUnion<T, S = T> = true extends IsNever<T>
  ? false
  : T extends S
  ? [S] extends [T]
    ? false
    : [T]
  : true;

type IsUnion1<T, S = T> = T extends S
  ? [S] extends [T]
    ? false
    : true
  : false;
type case4 = IsUnion1<never>;
type case1 = IsUnion1<number>; // false
type case2 = IsUnion1<string | number>; // true
type case3 = IsUnion1<[string | number]>; // false

export {};
