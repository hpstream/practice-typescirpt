type Includes<T, K> = T extends [infer first, ...infer S]
  ? first extends K
    ? true
    : Includes<S, K>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">; // expected to be `true`

type isPillarMen1 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "DiK">; // expected to be `false`
