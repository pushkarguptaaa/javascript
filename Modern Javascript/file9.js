// ASYNC CODE, CALLSTACK, EVENT LOOP, PROMISES AND ASYNC AWAIT
const doSome = new Promise((resolve, reject) => {
  resolve("hello");
  reject(new Error("This promise failed"));
});
console.log(doSome);
doSome
  .then((resolvedValue) => {
    console.log(resolvedValue);
    return 5;
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log("Error occured:", err.message);
  });

const waitSome = function (timeoutInMs) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, timeoutInMs);
  });
};
waitSome(4000).then(() => {
  console.log("4 seconds passed");
});

// async function sendRequest(){
//     const response = await fetch("xyz");
//     const json = await response.json();
//     console.log(json);
// }
