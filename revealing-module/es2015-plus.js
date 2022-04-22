// ES2015+

let privateVar = 'Ben Cherry';
const publicVar = 'Hey there!';

const privateFunction = () => {
  console.log(privateVar);
};

const publicSetName = strName => {
  privateVar = strName;
};

const publicGetName = () => {
  privateFunction();
};

// Reveal public pointers to
// private functions and properties
const myRevealingModule = {
  setName: publicSetName,
  greeting: publicVar,
  getName: publicGetName,
}

export default myRevealingModule;

