"use strict";
// interface A {
//     x: number;
//     y: number;
//   }
//   class C implements A {
//     x = 0;
//     y=0;
//     constructor(){
//     }
//     // function hii() {
//     //     return "hoo"
//     // }
//   }
//   const c = new C();
//   c.x= 10;
class Base2 {
    constructor() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
}
var x = new Base2();
console.log(x["name"]);
class Derived2 extends Base2 {
    constructor() {
        super();
        console.log("hii");
    }
}
// Prints "base", not "derived"
const d4 = new Derived2();
