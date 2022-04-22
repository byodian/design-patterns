// This variation of the pattern demonstartes how globals can be passed in as
// arguments to our module's anonymous function.
import $ from 'jquery';

const priveteMethod = () => {
  $(".container").html("test")
}

const myModule = {
  publicMehods() {
    priveteMethod();
  }
}

export default myModule;
