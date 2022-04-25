// Decorating Objects with new functionality
class Vehicle {
  constructor(vehicleType) {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
  }
}

// Test instance of a basic vehicle
const testInstance = new Vehicle('car');
console.log(testInstance);

const truck = new Vehicle('truck');

// New functionality we're decoratoing the vehicle with
truck.setModel = function(modelName) {
  this.model = modelName;
}


truck.setColor = function(color) {
  this.color = color;
}

truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);
