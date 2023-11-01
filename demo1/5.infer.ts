export {}

// 获取函数的返回值

type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;


function getUserInfo() {
    return { name: "hp", age: 10 };
}

// 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 UserInfo
type UserInfo = ReturnType<typeof getUserInfo>;

const userA: UserInfo = {
    name: "12",
    age: 11
};



// 获取函数的参数

type Parameters<T> = T extends (...args: infer R) => any ? R : any;


type T0 = Parameters<() => string>;  // []
type T1 = Parameters<(s: string,a:number) => void>;  // [string]
type T2 = Parameters<(<T>(arg: T) => T)>;  // [unknown]