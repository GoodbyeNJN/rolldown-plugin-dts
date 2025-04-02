// index.d.ts

//#region tests/fixtures/has-class/foo.d.ts
declare abstract class A {}
interface B {}
interface C {}
interface D {}
interface E {}

//#endregion
//#region tests/fixtures/has-class/index.d.ts
declare class Foo extends A {
  b: B;
  constructor(c: C);
  method(d: D): E;
}

//#endregion
export { Foo as default };