//(3-1) for node.js
console.log('example of (3-1)');

const Lib = require('../mylib.min.js');

const Tom = Lib.Tom;
const Jack = Lib.Jack;

const tom = new Tom();
const jack = new Jack();

console.log(tom.sayHello());//-> Hi, I am Tom.
console.log(jack.sayHello());//-> Hi, I am Jack.