export function assoc<K extends string, T extends () => string>(
  key: K,
  value: T
) {
  return <O extends object>(obj: O) => ({
    ...obj,
    [key]: value(),
  }) as K extends keyof O ?
    Omit<O, K> & Record<K, string> :
    O & Record<K, string>;
}
