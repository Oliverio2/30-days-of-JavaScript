function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}
const greet = createHelloWorld();
console.log(greet());
