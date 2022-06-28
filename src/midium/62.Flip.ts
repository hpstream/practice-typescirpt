type Flip<T extends Record<string, any>> = {
  [key in keyof T as key extends keyof T ? `${T[key]}` : never]: key;
};

type s = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type s1 = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type s2 =  Flip<{a: false; b: true}>; // {false: 'a', true: 'b'}



export{}