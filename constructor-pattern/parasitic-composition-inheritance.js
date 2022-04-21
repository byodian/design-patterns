// 寄生式组合继承 - javascript 最佳继承方式
function inheritPrototype(subType, superType) {
  const prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
  console.log(this.age);
}

const subType = new SubType("Nicholas", 29);
console.log(subType instanceof SubType); // true
console.log(subType instanceof SuperType); // true
console.log(subType instanceof Object); // true

console.log(SubType.prototype.isPrototypeOf(subType)); // true
