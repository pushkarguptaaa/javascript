// JS NODE PROMISES

let ready = true;
const checker = new Promise((resolve, reject) => {
  if (ready) {
    const markReady = "This is the result";
    resolve(markReady);
  } else {
    const markNot = "Still working on it";
    reject(markNot);
  }
});
ready = false;
// console.log(checker);

const check1 = () => {
  checker.then((val) => {
    console.log(val);
  });
  checker.catch((err) => {
    console.log("error");
    console.log(err);
  });
};

// NODE PROCESS OBJECT TERMINAL INPUT OUTPUT

const rLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rLine.question(`What is your name?`, (name) => {
  console.log(name);
  console.log(`Welcome ${name}`);
  rLine.close();
});
process.on("exit", (val) => {
  console.log(`Process Exiting `);
  console.log(val);
});
process.on("beforeExit", (val) => {
  console.log(`Before exit `);
  console.log(val);
});
console.log("last message");

// console.log(process.env);
// console.clear();

// NODE EVENT EMITTER

const events = require("events");
const eEmitter = new events.EventEmitter();
let counter = 0;
const getParty = function () {
  counter++;
  console.log("Time to party");
  const ran = Math.ceil(Math.random() * 3);
  console.log(`Party starts in ${ran}`);
  tester(ran);
};
eEmitter.on("music", getParty);
eEmitter.emit("music");
function tester(val) {
  if (counter < 5) {
    setTimeout((e) => {
      eEmitter.emit("music");
    }, val * 1000);
  }
}
eEmitter.on("event", (a, b) => {
  console.log(a, b, this);
});
eEmitter.emit("event", "a", "b");
// console.clear();

// NODE EVENTS SETUP

let m = 0;
eEmitter.on("event4", () => {
  console.log(++m);
});
eEmitter.emit("event4");

eEmitter.on("event1", (a, b) => {
  setImmediate(() => {
    console.log(`1 Async ${a} ${b}`);
  });
});

eEmitter.on("event2", (a, b) => {
  console.log(`2 Sync ${a} ${b}`);
});

eEmitter.once("event3", () => {
  console.log("Once Run");
});

for (let x = 0; x < 4; x++) {
  eEmitter.emit("event1", x, "b1");
  eEmitter.emit("event2", x, "b2");
  eEmitter.emit("event3");
}
console.clear();

// ASSIGNMENT 3

const events1 = require("events");
const eEmitter1 = new events1.EventEmitter();
const sayHello = function () {
  console.log("hello");
};
eEmitter1.on("greet", sayHello);
eEmitter1.emit("greet");
