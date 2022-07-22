enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 1
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
    return 0;
}
console.log(PrintMedia);
PrintMedia.Newsletter; // returns 5
PrintMedia.Magazine;
PrintMedia['Magazine'];