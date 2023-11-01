// ts 常见的关键字讲解
interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

type PartPerson = {
  [key in keyof Person]?: Person[key];
};
// in 相当于循环遍历interface,可以把他理解成for;

let p1: PartPerson = {};

//也可以使用泛型
type Part<T> = {
  [key in keyof T]?: T[key];
};
let p2: Part<Person> = {};



// 案例
function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n]);
}

let user = { id: 1, name: 'hp' };
type User = typeof user;

const res = pick<User, keyof User>(user, ["id", "name"]);
console.log(res);

export {};
