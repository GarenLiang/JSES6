var numbers = [ 10, 20, 30 ];
var sum = 0;

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
//next
var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];
primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);

//next
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) { return previous; }
    if (char === "(") { return ++previous; }
    if (char === ")") { return --previous; }

    return previous;
  }, 0);
}
console.log(balancedParens("(())"));
//Practice 1
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(pre,trip) {
    return pre+trip.distance;
},0);
totalDistance
//Practice 2
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(pre,desk) {
    if(desk.type === 'sitting') {
        pre.sitting++;
    }
    if(desk.type === 'standing') {
        pre.standing++;
    }
    return pre
}, { sitting: 0, standing: 0 });

//Practice 3
function unique(array) {
  return array.reduce((pre,item) => {
      if(!pre.includes(item)) {
          pre.push(item)
      }
      return pre;
  }, [])
}
