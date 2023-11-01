// ts 常见的关键字讲解
interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

type PersonKey = keyof Person;


function getValueByKey(p: Person, key: keyof Person) {
  return p[key];
}

// getValueByKey({ name: "hp", age: 10, gender: "male" }, "name");


getValueByKey({ name: "hp", age: 10, gender: "male" }, "");
