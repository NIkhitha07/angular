"use strict";
function* demogenerator(mynum) {
    //logic here
    console.log("byee");
    for (var z = 0; z < mynum.length; z++) {
        console.log("hii", z);
        yield mynum[z];
        console.log("byee2", z);
    }
}
var mydemoarray = [400, 500, 600, 700, 800, 900];
var myitr = demogenerator(mydemoarray);
console.log(myitr.next());
console.log(myitr.next());
