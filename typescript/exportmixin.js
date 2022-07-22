"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Child2 = exports.Child1 = void 0;
function Child1(base) {
    return class extends base {
        constructor() {
            super(...arguments);
            this.num = 10;
        }
    };
}
exports.Child1 = Child1;
// export class Child1{
//        num:number=10;
// }
function Child2(base) {
    return class extends base {
        constructor() {
            super(...arguments);
            this.num2 = 10;
        }
    };
}
exports.Child2 = Child2;
