export {};

interface Person {
  name: string;
  age: number;
  gender?: "male" | "female";
}
type Readonly<T> = { readonly [P in keyof T]: T[P] };


let p: Readonly<Person> = {
  name: "hp",
  age: 10,
  gender: "male",
};

p.age = 11;


// 取消只读方式
type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
}