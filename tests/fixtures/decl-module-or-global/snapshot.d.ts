// index.d.ts

//#region tests/fixtures/decl-module-or-global/index.d.ts
declare module "babel__core" {
  var fn1: any;
}
declare global {
  namespace React {}
}
declare var test: any;

//#endregion
export { test };