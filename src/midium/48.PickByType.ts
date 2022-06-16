type PickByType<O extends Record<string, any>, T> = {
  [K in keyof O as O[K] extends T ? K : never]: O[K];
};

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }

export {};
