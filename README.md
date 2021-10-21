# design-patterns

## 装饰器（decorator）

> 修饰模式，是面向对象编程领域中，一种动态地在一个类中添加新的行为的设计模式。就功能而言，修饰模式相比生成子类更为灵活，这样可以给某个对象而不是整个类添加一些功能。

就 JavaScript 而言，装饰器可以被看作是可以添加到函数的 features 或 aspects。我们可以添加一个或添加多个，而这一切无需更改其代码。

从外部代码看，包装的 `func` 函数执行的仍然是与之前相同的操作。它只是在其行为上添加了缓存功能。

通过将缓存与主函数代码分开，我们可以使主函数代码变得更简单。

```js
function cachingDecorator(func) {
  let cache = new Map()

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x)
    }

    let result = func(x)

    cache.set(x, result)
    return result;
  }
}
```

一些装饰器可能会提供自己的属性。例如会计算一个函数被调用了多少次以及花费了多少时间，并通过装饰器属性公开（expose）这些信息。

### 使用 Proxy 对象来包装函数

存在一种创建装饰器的方法，该装饰器可保留对函数属性的访问权限，但这需要 `Proxy` 对象来包装函数。

### 间谍装饰器

装饰器将所有对函数的调用保存在器 `calls` 属性中。

```js
function spy(func) {
  
  function wrapper(...args) {
    const calls = wrapper.calls || (wrapper.calls = []) 
    calls.push(args)
    return func.apply(this, arguments) 
  }

  return wrapper
}
```

### 延时装饰器

该装饰器将 `func` 的每次调用延时 `ms` 执行

```js
function delay(func, ms) {
  
  return function() {
    setTimeout(() => {
      return func.apply(this, arguments)  
    }, ms)
  }
}
```

### 防抖装饰器

`debounce(func, ms)` 装饰器的结果是一个包装器，该包装器将暂停对 `func` 的调用，直到经过 `ms` 毫秒的非活动状态（没有函数调用，“冷却期”），然后使用最新的参数调用 `func` 一次。

```js
function debounce (func, ms) {
  let timer;

  return function () {
    if (timer) {
      clearTimeout(timer)
    }

    setTimeout(() => {
      func.apply(this, arguments)
    })
  }
}
```

### 节流装饰器
