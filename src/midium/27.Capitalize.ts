type MyCapitalize<T> = T extends `${infer L}${infer R}`
  ? `${Uppercase<L>}${R}`
  : T;
type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
