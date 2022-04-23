var singleton = (function () {
  var instance;
  
  var init = function () {
    var privateMethod = function () {
      console.log('I am a private method');
    };
    
    var privateVariable = 'Hello World';
    var randomNumber = Math.random();

    var publicMethod = function () {
      privateMethod();
      console.log(privateVariable);
    }

    var getRandomNumber = function () {
      return randomNumber;
    }

    return {
      log: publicMethod,
      getNumber: getRandomNumber
    }
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

var singleton1 = singleton.getInstance();
var singleton2 = singleton.getInstance();

// Outputs: true
console.log(singleton1.getNumber() === singleton2.getNumber());

var singleton2 = (function () {
  var instance;

  var privateMethod = function() {
    console.log('I am also a private method');
  }

  function Constructor(options) {
    options = options || {};

    this.name = 'Singleton';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
    this.randomNumber = Math.random();
  }

  Constructor.prototype.getRandomNumber = function () {
    return this.randomNumber;
  }
  Constructor.prototype.publicMethod = function () {
    privateMethod();
  }

  var _static = {
    name: 'SingletonTester',
    getInstance: function (options) {
      if (instance == undefined) {
        instance = new Constructor(options);
      } 

      return instance;
    }
  }

  return _static;
})();

var mySingleton1 = singleton2.getInstance();
var mySingleton2 = singleton2.getInstance();

// Outputs: true
console.log(mySingleton1.getRandomNumber() === mySingleton2.getRandomNumber()); 
