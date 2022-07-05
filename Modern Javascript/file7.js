// OBJECT AND ARRAY DESTRUCTURING
const car = {
  color: "red",
  gears: 5,
  engine: "petrol",
};
// const engine = car.engine;
// const gears = car.gears;
// const color = car.color;
const { color, gears, engine: carEngine } = car;
console.log(color, gears, carEngine);

const someFunc = ({ color, gears, engine: carEngine }) => {
  //   console.log(carArg.color);
  //   const engine = carArg.engine;
  //   console.log(engine);
  console.log(color);
};
someFunc(car);

const someFunc1 = (carArg = {}) => {
  const { color = "green", gears = 3, engine } = carArg;
  console.log(color, gears);
};
someFunc1();

const someArr = [1, 2, 3, 4];
const [first, second] = someArr;
console.log(first, second);
