export {};
// - Pick 能够帮助我们从传入的属性中摘取某一项返回
type Pick<T, K extends keyof T> = { [P in K]: T[P] };


interface Animal {
  name: string;
  age: number;
  gender:number
}

/**
 * From T pick a set of properties K
 * 
 */// 摘取 Animal 中的 name 属性
interface Person {
    name: string;
    age: number;
    married: boolean
}
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result: any = {};
    keys.map(key => {
        result[key] = obj[key];
    });
    return result
}
let person: Person = { name: 'hp', age: 10, married: true };



let result = pick<Person, 'name' | 'age'>(person, ['name', 'age']);

type Res = Pick<typeof result,keyof typeof result>

console.log(result);

