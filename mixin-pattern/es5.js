function Car({ model, color }) {
  this.model = model || 'no model provided';
  this.color = color || 'no colour provided';
}

var Mixin = function () {}
Mixin.prototype.driveForward = function () {
  console.log('drive forward');
};
Mixin.prototype.driveBackward = function () {
  console.log('drive backward');
};
Mixin.prototype.driveSideways = function () {
  console.log('drive sideways');
};

function augment(child, parent) { 
  // only provide certain methods
  if (arguments[2]) { 
    for(var i = 0, len = arguments.length; i < len; i++) {
      child.prototype[arguments[i]] = parent.prototype[arguments[i]]
    }
  // provide all methods of parent prototype
  } else {
    for (var methodName in parent.prototype) {
      if (!child.prototype[methodName]) {
        child.prototype[methodName] = parent.prototype[methodName]
      }
    }
  }
}

// provide both 'driveBackward' and 'driveForward' for Car constructor
augment(Car, Mixin, 'driveForward', 'driveBackward');

var myCar = new Car({
  model: 'Ford Escort',
  color: 'Blue'
})

myCar.driveForward();
