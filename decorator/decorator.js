// function cachingDecorator2(func) {
//   const answer = cachingDecorator2.answer || (cachingDecorator2.answer = {})

//   return function(x) {
//     if (answer[x]) {
//       return answer[x]
//     }

//     const result = func(x)
//     answer[x] = result

//     return result
//   }
// }

const worker = {
  someMethod() {
    return 1
  },
   slow(x) {
    return x * this.someMethod();
  },
  add(min, max) {
    return min + max;
  }
}

function cachingDecorator(func) {
  let cache = new Map();

  return function() {
    const key = hash(arguments)
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  }
}

function hash() {
  return [].join.call(arguments)
}


worker.slow = cachingDecorator(worker.slow)
console.log(worker.slow(2));

worker.add = cachingDecorator(worker.add)
console.log(worker.add(1, 2));

function spy(func) {
  
  function wrapper(...args) {
    const calls = wrapper.calls || (wrapper.calls = []) 
    calls.push(args)
    return func.apply(this, arguments) 
  }

  return wrapper
}

function work(a, b) {
  console.log(a + b)
}

work = spy(work)
work(1, 2)
work(4, 5)

console.log(work.calls);

function test(x) {
  console.log(x)
}

/**
 * 延时装饰器 
 * @param {Function} func 
 * @param {Number} time 
 * @returns 
 */
function delay(func, time) {
  
  return function() {
    setTimeout(() => {
      return func.apply(this, arguments)  
    }, time)
  }
}

/**
 * 防抖函数，在 ms 期间没有函数调用，才执行一次 func 的调用 
 * @param {Function} func 
 * @param {Number} ms 
 * @returns 
 */
function debounce (func, ms) {
  let timer;

  return function () {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, ms)
  }
}

let f = debounce(test, 1000)
f('a')
setTimeout(() => f('b'), 200)
setTimeout(() => f('c'), 500)
