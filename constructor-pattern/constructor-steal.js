// => 盗用构造器函数
// 优点：可以在子类构造器中调用父类的构造器
// 缺点：必须在构造器中定义方法，函数不能重用；子类
// 也不能调用父类原型上定义的方法
function SuperType(name) {
  this.name = name
  this.colors = ['green', 'red']
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

const instance1 = new SubType('byodian', 20)
const instance2 = new SubType('Bob', 30)
instance1.colors.push('black')
console.log(instance1.colors)
console.log(instance2.colors)
console.log(instance1.name)
console.log(instance2.name)

