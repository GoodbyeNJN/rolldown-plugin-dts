// index.d.ts

//#region tests/fixtures/issue-160-global-namespace/mod.d.ts
interface A {}
interface B {}

//#endregion
//#region tests/fixtures/issue-160-global-namespace/index.d.ts
declare global {
  namespace Named.Core {
    export { A, B };
  }
  namespace Foo.Bar.Baz.Quux {
    export { A, B };
  }
}

//#endregion
export { A };