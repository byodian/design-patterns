function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}

var p1 = {
  name: 'John',
  age: 12
};

var p2 = object(p1);
console.log(p2);
console.log(p2.name);

