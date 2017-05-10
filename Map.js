var numbers = [1,2,3];
var doubledNumbers = [];

var doubled = numbers.map(function(number) {
  return number*2;
});

console.log(doubled);
//next

var cars =[
  { model: 'Buick', price: 'cheap' },
  { model: 'Camaro', price: 'expensive' }
];
var prices = cars.map(function(car) {
  return car.price;
});
console.log(prices);

//Practice 1
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];



var heights = images.map(function(image) {
    return image.height;
});

console.log(heights);

//Practice 2
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return trip.distance/trip.time;
});
console.log(speeds);

//Practice 3
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

function pluck(array, property) {
    return array.map(function(arr) {
        return arr[property];
    });
}
