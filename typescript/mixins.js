"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exportmixin_1 = require("./exportmixin");
const Example = (0, exportmixin_1.Child1)((0, exportmixin_1.Child2)(class {
}));
const ex = new Example();
console.log(ex.num2, ex.num);
// class A {
// }
// class B{
// }
// class C extends A,B{
// }
