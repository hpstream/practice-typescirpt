// Required 可以将传入的属性中的可选项变为必选项，这里用了 -? 修饰符来实现
export {}

interface Person {
  name: string;
  age: number;
  gender?: "male" | "female";
}
/**
 * type Require<T> = { [P in keyof T]-?: T[P] };
 */

let p: Required<Person> = {
  name: "hp",
  age: 10,
//   gender:'male'
};
