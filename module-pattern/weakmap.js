// Basic module Defintion
let _counter = new WeakMap();

class Module {
  constructor() {
    _counter.set(this, 0);
  }

  incrementCounter() {
    let counter = _counter.get(this);
    counter++;
    _counter.set(this, counter);

    return _counter.get(this);
  }

  resetCounter() {
    console.log(`Counter value piror to reset: ${_counter.get(this)}`);
    _counter.set(this, 0);
  }
}

const testModule = new Module();

testModule.incrementCounter();

testModule.resetCounter();

//  Namespaces with Public/Private variables

const myPrivateVar = new WeakMap();
const myPrivateMethod = new WeakMap();

class MyNamespace {
  constructor() {
    // A private counter variable
    myPrivateVar.set(this, 0);

    // A private function which logs any arguments
    myPrivateMethod.set(this, foo => console.log(foo));

    // A public variable
    this.myPublicVar = 'foo';
  }

  // A public function utilizing privates
  myPublicFunction(bar) {
    let privateVar = myPrivateVar.get(this);
    const privateMethod = myPrivateMethod.get(this);

    // Increment our private counter
    privateVar++;
    myPrivateVar.set(this, privateVar);

    // Call our private method using bar
    privateMethod(bar);
  }
}


