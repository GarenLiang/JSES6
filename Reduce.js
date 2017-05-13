var numbers = [ 10, 20, 30 ];
var sum = 0;

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
