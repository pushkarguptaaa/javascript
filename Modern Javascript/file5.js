// ARROW FUNCTIONS AND DEFAULT FUNCTION ARGUMENTS
const myName1 = () => "Pushkar";
const myName2 = () => ({
  name: "Pushkar",
});
const m = myName1();
const n = myName2();
console.log(m);
console.log(n);
const myName3 = (myName = "Pushkar") => {
  console.log("My name is", myName);
};
const o = myName3();
console.log(o);
