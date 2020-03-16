/// <reference path='fourslash.ts' />
// @allowJs: true
// @checkJs: true
// @noEmit: true
// @noImplicitAny: true
// @Filename: test.js

////const foo = x => x.y + 1;
////class C {
////    m = x => x.y + 1;
////}

verify.codeFixAll({
  fixId: "inferFromUsage",
  fixAllDescription: "Infer all types from usage",
  newFileContent:
`/**
 * @param {{ y: number; }} x
 */
const foo = x => x.y + 1;
class C {
    /**
     * @param {{ y: number; }} x
     */
    m = x => x.y + 1;
}`,
});