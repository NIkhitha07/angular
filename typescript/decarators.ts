// method
function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
    };
  }
   
  function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("second(): called");
    };
  }
   
  class ExampleClass {
    @first()
    @second()
    method() {}
  }

//   class
  function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
  @sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}