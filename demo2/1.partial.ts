export {};

// Partial 可以将传入的属性由非可选变为可选


type Partial<T> = { [P in keyof T]?: T[P] };

interface A {
  a1: string;
  a2: number;
  a3: boolean;
}

type aPartial = Partial<A>;

const a: aPartial = {}; // 不会报错

// 这里主要用到了基本关键字 keyof 和 in;

// 实现递归可选
interface Company {
    id: number
    name: string
}

interface Person {
    id: number
    name: string
    company: Company
}
type DeepPartial<T> = {
    [U in keyof T]?: T[U] extends object
    ? DeepPartial<T[U]>
    : T[U]
};

type R2 = DeepPartial<Person>

// 这里主要用到了 基本关键字 keyof in extends;