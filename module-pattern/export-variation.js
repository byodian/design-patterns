// ES2015+
// Module object

const module = {};
const privateVariable = 'Hello Wrold';

const privateMethod = () => {
  //...
};

module.publicProperty = 'Foobar';
module.publicMehod = () => {
  console.log(privateVariable);
  privateMethod();
}


// Default export module, without name
export default module;
