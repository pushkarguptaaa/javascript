// ARRAYS

const arr1 = ["hi", 4, true];

// delete arr1[2];

// arr1[100] = "hello";
arr1.splice(1, 0, "hello");
console.log(arr1);

// ARRAY METHODS
const arr2 = ["hi", "hello", 55, true, { one: "one", two: "two" }];
console.log(arr2);
let val = arr2.toString();
val = JSON.stringify(arr2);
console.log(val);
val = JSON.parse(val);
val[0] = "updated";
console.log(val);
console.log(arr2);

const arr3 = ["one", "two", "three", "two"];
val = arr3.join("{||}");
console.log(val);
val = arr3.concat(arr2);
val = arr3.includes("two");
val = arr3.indexOf("two");
val = Array.isArray(arr3);
val = arr3.lastIndexOf("two");
console.log(val);
console.log(arr3);
arr3.sort();
arr3.reverse();
console.log(arr3);

// ARRAY MAP METHOD

const arr4 = arr3.map((val) => val);
arr3[1] = "Pushkar";
console.log(arr3);
console.log(arr4);
const arr5 = arr3.map((val) => {
  val += " tested";
  return val;
});
console.log(arr5);
