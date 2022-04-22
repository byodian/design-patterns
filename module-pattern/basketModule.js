// privates

const basket = [];

const doSomethingPrivate = () => {
  //...
};

const doSomethingElsePrivate = () => {
  //...
}

// Create an object exposed to the public

const basketModule = {
  // Add item to out basket
  addItem(values) {
    basket.push(values);
  },

  // Get the count of items in the basket
  getItemCount() {
    return basket.length;
  },
  

  // Public alias to a private function
  doSomething() {
    doSomethingPrivate();
  },

  // Get the total value of items in the basket
  getTotal() {
    let total = 0;

    for (let i = 0; i < basket.length; i++) {
      total += basket[i].price;
    }

    return total;

    // return basket.reduce((currentSum, item) => currentSum + item.price, 0);
  },
}
