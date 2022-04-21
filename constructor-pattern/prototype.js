//
// 原型链继承
// 
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function() {
  return this.property;
}

function SubType() {}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
  return this.property;
}

// 1. 原型链引用属性在实例间共享问题
function Person () {}
Person.prototype = {
  constructor: Person,
  name: 'byodian',
  age: 28,
  job: 'Software Engineer',
  friends: ["bob", "alice"],
  sayName() {
    console.log(this.name);
  }
}

let person1 = new Person();
let person2 = new Person();

person1.friends.push("jim");
console.log(person1.friends);
console.log(person2.friends);

