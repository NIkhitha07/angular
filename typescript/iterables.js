"use strict";
// let someArray = [1, "string", false];
// for (let entry of someArray) {
//   console.log(entry); // 1, "string", false
// }
// for (let entry in someArray) {
//     console.log(entry); // 1, "string", false
//   }
//   var techi:number[];
//   techi= [1,2,3,4,5]
//   .map(techi => techi * 2)
//   .filter(techi => techi > 5)
//   console.log(techi);
function* demogenerator(mynum) {
    //logic here
    console.log("generator called !!");
    for (var z = 0; z < mynum.length; z++) {
        yield mynum[z];
    }
}
console.log("Demo to show generator in typescript !!!");
var mydemoarray = [400, 500, 600, 700, 800, 900];
var myitr = demogenerator(mydemoarray);
let result1 = myitr.next();
let result2 = myitr.next();
let result3 = myitr.next();
let result4 = myitr.next();
let result5 = myitr.next();
let result6 = myitr.next();
console.log("printing result ::: ");
console.log("result one is  ::");
console.log(myitr, "myitr");
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
