function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
console.log(addNumbers(1,2,3));
//next
const defaultColors = ['red', 'green'];
const userColors = ['orange', 'yellow'];

[...defaultColors, ...userColors];
//next
function validateShoppingList (...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }
  return items;
}
console.log(validateShoppingList('oranges', 'bread', 'eggs'));
//next
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};
//Practice 1
function product(...numbers) {


  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
//Practice 2
function join(array1, array2) {
  return [...array1, ...array2];
}
//Practice 3
function unshift(array, ...numbers) {
  return [...numbers, ...array];
}
