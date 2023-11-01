export {}
/**
 * - Record 是 TypeScript 的一个高级类型
 * - 他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
 */

type Record<K extends keyof any, T> = {
    [P in K]: T;
};

type Point = 'x' | 'y';


type PointList = Record<Point, { value: number }>

const cars: PointList = {
    x: { value: 10 },
    y: { value: 20 },
}
