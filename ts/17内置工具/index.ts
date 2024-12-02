// Partial
type Person = {
  name: string;
  age: number;
};
type MyPartial<T extends { [index: string | number | symbol]: any }> = {
  [p in keyof T]?: T[p];
};

type PartialPerson = MyPartial<Person>;

//Required
type MyRequired<T extends { [index: string | number | symbol]: any }> = {
  [p in keyof T]-?: T[p];
};

//  Readonly
type MyReadonly<T extends { [index: string | number | symbol]: any }> = {
  readonly [p in keyof T]: T[p];
};

// Record
type MyRecord<K extends keyof any, V> = {
  [p in K]: V;
};

// Pick
type MyPick<T, V extends keyof T> = {
  [p in V]: T[p];
};

type test = MyPick<Person, 'name' | 'age'>;

// Omit
type MyOmit<T, V extends keyof T> = {
  [p in keyof T as p extends V ? never : p]: T[p];
};

type test2 = MyOmit<Person, 'name'>;

// Exculde 用到分发

/**
 * 比如 T为name|age|sex,V为sex,会拿联合里每个属性进行比较
 */
type MyExculde<T, V> = T extends V ? never : T;

//Extract
type MyExtract<T, V> = T extends V ? never : T;

// MyNonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T;

type FirstEle<T> = T extends [a: string, infer v, ...args: any] ? v : never;

type String = FirstEle<['1', 'a', 'b']>;

export {};
