// 交集

interface cA {
  name: string;
  age: number;
  visible: boolean;
}

interface cB {
  age: number;
  visible: number;
  sex: boolean;
}


export type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>;

// type Ca = { name: string; age: number; visible: boolean };

// type Cb = { age: number; visible: boolean; sex: boolean };

type DuplicateProps = Intersection<cB,  cA>;


// 特殊情况分析