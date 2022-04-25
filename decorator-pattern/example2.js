// Decorating Objects with Multiple Decorators
class MacBook {
  constructor() {
    this.cost = 997;
    this.screenSize = 11.6;
  }

  getCost() {
    return this.cost;
  }

  getScreenSize() {
    return this.screenSize;
  }
}

// Decorator  1
class Memory extends MacBook {
  constructor(meacbook) {
    super();
    this.macbook = meacbook;
  }

  getCost() {
    return this.macbook.getCost() + 75;
  }
}

// decorator 2
class Engraving extends MacBook {
  constructor(macbook) {
    super();
    this.macbook = macbook;
  }

  getCost() {
    return this.macbook.getCost() + 200;
  }
}

// decorator 3
class Insurance extends MacBook {
  constructor(macbook) {
    super();
    this.macbook = macbook;
  }

  getCost() {
    return this.macbook.getCost() + 250;
  }
}

let mb = new MacBook();
mb = new Memory(mb);
mb = new Engraving(mb);
mb = new Insurance(mb);
console.log(mb.getCost()); // 1522
