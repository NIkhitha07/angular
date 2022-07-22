"use strict";
var Ex;
(function (Ex) {
    Ex[Ex["T"] = 10] = "T";
    Ex[Ex["K"] = 8] = "K";
    Ex[Ex["L"] = 9] = "L";
})(Ex || (Ex = {}));
// type E2 ="Stting"|1;
// var e3:E2=1;
// type duplicate= keyof typeof Ex;
// var e4:duplicate='T';
// // e4="T";
// console.log(e4);
// console.log(Ex);
(function (Ex) {
    Ex[Ex["I"] = 0] = "I";
    Ex[Ex["k"] = 8] = "k";
})(Ex || (Ex = {}));
console.log(Ex);
