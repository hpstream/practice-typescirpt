export {}

// 排除
type Exclude<T, U> = T extends U ? never : T;

// 提取
type Extract<T, U> = T extends U ? T : never;



type Props = { name: string; age: number; visible: boolean };

 
type a = Exclude<keyof Props,'age'>


type b = Extract<keyof Props,'age'>




// 高级用法
// Pick 遍历对象

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;


type Man = { name: string; age: number; visible: boolean };


type Props1 = Omit<Man, 'age'>;