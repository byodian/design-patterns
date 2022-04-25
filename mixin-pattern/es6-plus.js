class Car {
  consturctor({ model, color }) {
    this.model = model || 'no model provided';
    this.color = color || 'no colour provided';
  }
}

// Mixin
const Mixin = superclass => 
  class extends superclass {
    driveForward() {}
    driveBackward() {}
    driveSideways() {}
  }

class MyCar extends Mixin(Car) {}

const myCar = new MyCar({
  model: 'Ford Escort',
  color: 'blue'
});
