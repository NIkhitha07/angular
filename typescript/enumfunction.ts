enum E {
    Foo=2,
    Bar,
    Too,
  }
   console.log(typeof(E.Bar));
  function f(obj: { Foo: number, Bar:number}):void{
      console.log(E.Foo,obj.Foo)
    if ((obj.Foo !== E.Foo) || (obj.Bar !== E.Bar) ){
        console.log("if block");
    }
    // return obj.X;
  }
//   f(E);
// enum L {
//     // L=E;
// }

 enum num {
    X,
    Y,
    Z,
  }
  declare enum num2{
    N,
    M
  }
  // var ex:number=num2.M;
  declare var n:any;
  console.log("example")
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
