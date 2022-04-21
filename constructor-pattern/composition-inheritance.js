// 组合继承 - javascript 中使用最多的继承模式
// 结合盗用构造函数和原型链继承的特性

// 基本思路：
// 1. 使用原型链继承原型上的属性和方法
// 2. 通过调用构造函数继承实例属性
function Shape(x, y) {
  this.x = x;
  this.y = y
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.', x + y);
}

function Rectangle(x, y, z) {
  Shape.call(this, x, y); // call super constructor.
  this.z = z
}

// 重写 Rectangle 的 prototype 属性
Rectangle.prototype = Object.create(Shape.prototype);
console.log(Rectangle.prototype.constructor);

Object.defineProperty(Rectangle.prototype, 'constructor', {
  value: Rectangle,
})

