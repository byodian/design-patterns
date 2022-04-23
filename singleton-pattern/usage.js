//*************************//
// ES2015+
// The Singleton used ES2015+ syntax for coordination
//*************************//

class Singleton {
  constructor(options) {
    this.name = 'SingletonTester';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }
}

// instance
// If no initial value is specified on declaration, the variable 
// is initialized with a value of `undefined`.
let instance;

// an emulation of static variable and methods
const SingletonTester = {
  name: 'SingletonTester',
  getInstance(options) {
    if (instance === undefined) {
      instance = new Singleton(options);
    }

    return instance;
  }
};

const singletonTester = SingletonTester.getInstance({
  pointX: 5,
})

console.log(singletonTester);


//*************************//
// ES5/Classic Approach
// Using Singletons for coordination
var SingletonTester2 = (function () {
  function Singleton(options) {
    options = options || {};

    this.name = 'SingletonTester';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }

  // instance
  var instance2;

  var _static = {
    name: 'SingletonTester',
    getInstance: function (options) {
      if (instance2 == undefined) {
        instance2 = new SingleTester2(options)
      }

      return instance2;
    }
  }

  return _static;
})();
