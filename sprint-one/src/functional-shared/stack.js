var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.items = 0;
  extend(newStack, Stack.stackMethods);
  return newStack;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(){
    this.items = value;
};

Stack.stackMethods.pop = function(){

};

Stack.stackMethods.size = function(){
  return 0;

};







// var giraffeMaker = function(name, height) {
//   var newGiraffe = {};
//   newGiraffe.name = name;
//   newGiraffe.height = height;
//   newGiraffe.hunger = 10;
//   extend(newGiraffe, giraffeMaker.giraffeMethods);

//   return newGiraffe;
// };

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

// giraffeMaker.giraffeMethods = {};


// giraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
//     return this.height > treeHeight;
//   };

// giraffeMaker.giraffeMethods.isHungry = function() {
//   return this.hunger > 0;
// };

// giraffeMaker.giraffeMethods.say = function(option) {
//   var sentences = {
//     'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
//     'notHungry': this.name + ' is not hungry.',
//     'notTallEnough': this.name + ' is too short to reach the trees.',
//     'ate': 'That was delicious!'
//   };

//   return console.log(sentences[option]);
// };