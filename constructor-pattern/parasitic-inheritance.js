// 通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似
function createAnother(original) {
  const clone = Object.create(original);
  clone.sayHi = function() {
    console.log('Hi!');
  };
  return clone;
}

const person = {
  name: 'John',
  age: 30,
};

const anotherPerson = createAnother(person);
console.log(anotherPerson.name);
