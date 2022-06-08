type Replace<
  S extends string,
  P extends string,
  V extends string
> = S extends `${infer pre}${P}${infer next}` ? `${pre}${V}${next}` : S;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
