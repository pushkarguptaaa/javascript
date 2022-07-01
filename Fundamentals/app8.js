// OBJECTS AND ARRAY ITERATION

const arr = [1, 2, 3, 4, "five", "six"];
const obj = {
  first: "Pushkar",
  last: "Gupta",
  city: "Ambala",
};
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach((val) => {
  console.log(val);
});
for (key in obj) {
  console.log(key, obj[key]);
}
console.log(Object.entries(obj));
Object.entries(obj).forEach(([val, key]) => {
  console.log(val, key);
});
console.log(Object.keys(obj));
const arr1 = Object.values(obj);
arr1.forEach((val, index, arr1) => {
  console.log(val, index, arr1);
});
