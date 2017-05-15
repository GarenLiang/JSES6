const add = (a, b) => {
  return divideTheseThings(a + b) + divideTheseThings(a + b/1000);
}

const newSum = add(1, 2);

console.log(newSum);
//next
const numbers = [1,2,3];

numbers.map(number => 2 * number);
//next

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
console.log(team.teamSummary());


//Practice 1
const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Practice 2
const profile = {
    name: 'Alex',
    getName: () => profile.name
};
