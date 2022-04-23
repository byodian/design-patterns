// Instance stores a reference to the Singleton
let instance;

const privateMethod = () => {
  console.log('I am private');
}
const privateVariable = 'Hello World';
const randomNumber = Math.random();

class Singleton {
  constructor() {
    if (!instance) {
      this.publicProperty = 'I am public';
      this.randomNumber = Math.random();
      instance = this;
    }

    return instance;
  }

  publicMethod() {
    console.log('The public can see me!');
  }

  getRandomNumber() {
    return this.randomNumber;
  }
}

const singleA = new Singleton();
const singleB = new Singleton();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber())
