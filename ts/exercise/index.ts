/** pick */
type LdPick<T, V extends keyof T> = {
  [p in V]: T[p];
};

/**
 * return
 *
 */
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
type LdReturn<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer v
  ? v
  : never;

type fnReturn = LdReturn<typeof fn>;

/**
 * omit
 */
type LdOmit<T, V extends keyof T> = {
  [p in keyof T as p extends V ? never : p]: T[p];
};

/**
 * readonly
 */
type LdReadonly<T> = {
  readonly [p in keyof T]: T[p];
};

/**
 *  指定已读
 */
type LdReadonly2<T, K extends keyof T> = Omit<T, K> & LdReadonly<Pick<T, K>>;
export {};

/**
 * 递归readonly
 */
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };

type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};
type DeepX = DeepReadonly<X>;

/**
 * turple to union
 */
type TupleToUnion<T extends any[]> = T[number];
type Arr = ['1', '2', '3'];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

type TupleToObject<T extends any[]> = {
  [p in T[number]]: p;
};
type Test2 = TupleToObject<Arr>;
export {};

/**
 * last ele
 */
type LastEle<T extends any[]> = [T['length'], ...T][T['length']];

type last = LastEle<[1, 2, 3, 4, 5]>;

/**
 * pop
 */

type Pop<T extends any[]> = T extends [...infer v, infer _] ? v : never;
type testPop = Pop<[1, 2, 3]>;

type Shift<T extends any[]> = T extends [infer _, ...infer v] ? _ : never;
type testShift = Shift<[1, 2, 3]>;
