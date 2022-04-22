// A private counter variable
let myPrivateVar = 0;

// A private function which logs any arguments
const myPrivateMethod = foo => {
  console.log(foo)
}

const myNamespace = {
  // A public variable
  myPublicVar: 'foo',

  // A public function utilizing private
  myPublicFunction(bar) {
    // Increment our private counter
    myPrivateVar++;

    // Call out private method using bar
    myPrivateMethod(bar)
  },

  getPrivateVar() {
    return myPrivateVar;
  }
}

export default myNamespace;
