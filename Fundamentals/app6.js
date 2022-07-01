// OBJECTS

const myObj1 = {
  first: "Pushkar",
  last: "Gupta",
  age: "19",
  a1: "test",
  a2: "test 1",
  a3: "test 2",
};
console.log(myObj1);
for (let x = 1; x < 4; x++) {
  console.log("a" + x);
  console.log(myObj1["a" + x]);
}

// OBJECT METHODS

const myObj2 = {
  val: 100,
  val1: true,
  val2: {
    first: "Pushkar",
    last: "Gupta",
  },
  fullName: function () {
    return this.val2.first + " " + this.val2.last;
  },
};
console.log(myObj2.fullName());
