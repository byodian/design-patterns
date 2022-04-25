class Car {
  constructor({ doors, state, color}) {
    this.doors = doors || 4;
    this.state = state || 'brand new';
    this.color = color || 'silver';
  }
}

class Truck {
  constructor({ state, color, wheelSize }) {
    this.state = state || 'used';
    this.color = color || 'blue';
    this.wheelSize = wheelSize || 'large';
  }
}

// FactoryExample class
class VehicleFactory {
  costructor() {
    this.vehicleClass = Car;
  }

  createVehicle(options) {
    switch (options.vehicleType) {
      case 'car':
        this.vehicleClass = Car;
        break;
      case 'truck':
        this.vehicleClass = Truck;
        break;
    }

    return new this.vehicleClass(options);
  }
}

// Abstract Factory
// It is also useful to be aware of the Abstract Factory pattern, which aims to
// encapsulate a group of individual factories with a common goal.

class AbstractVehicleFactory {
  constructor() {
    this.types = {};
  }

  static getVehicle(type, customizations) {
    const Vehicle = this.types[type];
    return Vehicle ? new Vehicle(customizations) : null;
  }

  static registerVehicle(type, Vehicle) {
    const proto = Vehicle.prototype;

    if(proto.drive && proto.breakDown) {
      this.types[type] = Vehicle;
    }

    return AbstractVehicleFactory;
  }
}

AbstractVehicleFactory
  .registerVehicle('car', Car)
  .registerVehicle('truck', Truck);

// Instantiate a new car based on the abstract vehicle type
const car = AbstractVehicleFactory.getVehicle('cat', {
  color: 'lime green',
  state: 'like new',
})

const truck = AbstractVehicleFactory.getVehicle('truck', {
  wheelSize: 'medium',
  color: 'neon yellow',
})
