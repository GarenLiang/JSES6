function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
//Rewrite with ES6
class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'vroom';
  }
}
class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep';
  }
}
const toyota = new Toyota({ color: 'red', title: 'Daily Driver', color: 'red' });
console.log(toyota.honk());
console.log(toyota.drive());
console.log(toyota);
//next
React.createClass({
  doSomething() {

  },
  doSomethingElse() {

  }
});

class MyComponent extends Component {
  doSomething() {

  }
  doSomethingElse() {

  }
}
//Practice 1
class Monster {
  constructor(options) {
      this.health = 100,
      this.name = options.name
  }
}
//Practice 2
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    bite(snake) {
        return snake.health -= 10;
    }
}
