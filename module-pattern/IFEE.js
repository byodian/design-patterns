//************************************//
// The Module Pattern
//************************************//

var testModule = (function () {
  var counter = 0;

  return {
    incrementCounter: function () {
      return counter++
    },

    resetCounter: function () {
      console.log("conunter value prior to reset: " + counter);
      counter = 0;
    }
  }
})()

// Usage: 
// // Increment our counter
testModule.incrementCounter(); // 1

// Outputs: counter value prior to reset: 1
testModule.resetCounter(); 

