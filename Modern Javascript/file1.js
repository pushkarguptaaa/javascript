// VAR VS LET VS CONST
const printMyName = function () {
  if (3 < 5) {
    if (6 < 7) {
      const myName = "Pushkar";
      let myName1 = "Pushkar";
      myName1 = "Pushkarr";
      console.log(myName);
      console.log(myName1);
      var myName2 = "Pushkar";
    }
  }
  console.log(myName2);
};
printMyName();
