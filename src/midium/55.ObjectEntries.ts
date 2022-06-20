interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type ObjectEntries<T, V = keyof T, O = T> = V extends keyof O ? [V, O[V]] : [];

type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];

export {};
