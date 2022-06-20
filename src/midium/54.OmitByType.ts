type OmitByType<T, V> = {
  [k in keyof T as T[k] extends V ? never : k]: T[k];
};

type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }

export {};
