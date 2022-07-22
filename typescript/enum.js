"use strict";
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = getPrintMediaCode('newsletter')] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = PrintMedia.Newsletter * 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 1] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === 'newsletter') {
        return 5;
    }
    return 0;
}
console.log(PrintMedia);
PrintMedia.Newsletter; // returns 5
PrintMedia.Magazine;
PrintMedia['Magazine'];
