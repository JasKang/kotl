export type AugmentedRequired<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Required<Pick<T, K>>

export type Func = (...args: any[]) => any

export type Data = Record<string, any>

export type Flat<T> = T extends Func ? T : T extends object ? { [K in keyof T]: T[K] } : T

export type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: O[K] }
    : never
  : T

export type ExpandDeep<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T
