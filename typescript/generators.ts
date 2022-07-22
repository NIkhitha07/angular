function* myGenarator() {
    console.log('hello');
    yield 1;
    yield 2;
}

let gen = myGenarator();

console.log(myGenarator());

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());