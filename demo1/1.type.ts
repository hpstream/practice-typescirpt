// ts 常见的关键字讲解
interface People {
  name: string;
  age: number;
  gender: string;
}
let p1 = {
  name: "hp",
  age: 10,
  gender: "male",
};

type Man = typeof p1;

function getName(p: Man): string {
  return p.name;
}
getName(p1);
