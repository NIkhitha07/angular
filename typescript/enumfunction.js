"use strict";
var E;
(function (E) {
    E[E["Foo"] = 2] = "Foo";
    E[E["Bar"] = 3] = "Bar";
    E[E["Too"] = 4] = "Too";
})(E || (E = {}));
console.log(typeof (E.Bar));
function f(obj) {
    console.log(E.Foo, obj.Foo);
    if ((obj.Foo !== E.Foo) || (obj.Bar !== E.Bar)) {
        console.log("if block");
    }
    // return obj.X;
}
//   f(E);
// enum L {
//     // L=E;
// }
var num;
(function (num) {
    num[num["X"] = 0] = "X";
    num[num["Y"] = 1] = "Y";
    num[num["Z"] = 2] = "Z";
})(num || (num = {}));
console.log("example");
console.log(num2.M);
//   function f(obj: { X: number }) {
//     return obj.X;
//   }
//   // Works, since 'E' has a property named 'X' which is a number.
//   f(E);
// enum E {
//     Foo,
//     Bar,
//   }
//   function f(x: E) {
//     if (x !== E.Foo || x !== E.Bar) {
// //   This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
//       //
//     }
//   }
