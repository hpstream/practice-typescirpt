const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends ReadonlyArray<any>> = {
  [P in T[number]]: P;
};
// type ss = typeof tuple;
type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
