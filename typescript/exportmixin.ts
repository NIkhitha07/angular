export type Class = new (...args: any[])=>any
export function Child1 <Base extends Class>(base:Base) {
    return class extends base{
        num:number=10;
    }
}
// export class Child1{
//        num:number=10;
// }
export function Child2 <Base extends Class>(base:Base) {
    return class extends base{
        num2:number=10;
    }
}