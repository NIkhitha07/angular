"use strict";
function disp_details(id, name = "default", mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123);
disp_details(111, "mary", "mary@xyz.com");
function addNumbers(...nums) {
    var i;
    var sum = "";
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers("nik", "nikki", "nikkiii");
//  addNumbers(10,10,10,10,10)
