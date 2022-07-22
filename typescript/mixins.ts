import {Child1, Child2} from "./exportmixin"
const Example = Child1(Child2(class{

}))
const ex = new Example();
console.log(ex.num2,ex.num);
// class A {

// }
// class B{

// }
// class C extends A,B{

// }