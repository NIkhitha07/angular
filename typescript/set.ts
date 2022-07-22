let pets =new Set(["Cat", "Dog", "Hamster"]);
// pets["species"] = "abcde";
for (let pet in pets) {
  console.log(pet); // "species"
}
for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}