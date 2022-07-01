console.log(__dirname);
console.log(__filename);
console.log(process.pid);
console.log(process.argv);
console.log(process.argv[1]);
let first = process.argv[2];
let second = process.argv[3];
let message = `My name is ${first} ${second}`;
console.log(message);
