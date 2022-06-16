type MinusOne<T extends number, Tem extends any[] = []> = [
  ...Tem,
  ""
]["length"] extends T
  ? Tem["length"]
  : MinusOne<T, [...Tem, ""]>;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

export {};
