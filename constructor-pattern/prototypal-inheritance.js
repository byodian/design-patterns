'use strict'
// object()函数会创建一个临时构造函数
// 将传入的对象赋值给这个构造函数的原型
// 然后返回这个构造函数的一个实例
// object() 本质上是对传入的对象进行了一次浅拷贝
function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}

let person = {
  name: 'John',
  friends: ['Sara', 'Mike'],
}

let anotherPerson = object(person);
anotherPerson.name = 'Bob';
anotherPerson.friends.push('Jen');

let yetAnotherPerson = object(person);
yetAnotherPerson.name = 'Alice';
yetAnotherPerson.friends.push('Kate');

let firstPerson = Object.create(person, {
  name: {
    value: 'Alice',
    configurable: true,
    enumerable: true
  },
  age: {
    value: 12,
    wriable: true,
    enumerable: true
  }
});

for (const key in firstPerson) {
  console.log(123, key)
}

// TypeError: Cannot assign to read only property 'name' of object
firstPerson.name = 'Bob'; 

// success
firstPerson.age = 13;

delete firstPerson.name
delete firstPerson.age // TypeError cannot delete  property 'age' of object
console.log(firstPerson.__proto__=== person)
