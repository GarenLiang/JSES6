var expense = {
  type: 'Business',
  amount: '$45 USD'
};
//var type = expense.type;
const { type, amount } = expense;
console.log(type, amount);
//next
var savedField = {
  extension: 'jpg',
  name: 'report',
  size: 14040
};
function fileSummary({name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}
console.log(fileSummary(savedField));
// next
const companies = [
  'Google',
  'Facebook',
  'Uber'
];
const [ name, name2, ...rest ] = companies;
//next
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;
console.log(location);
//next
function signup({username, password, email, dateOfBirth, city}) {

}
const user = {
  username: 'myname',
  password: 'password',
  email: 'email@email.com',
  dateOfBirth: '02/08/1991',
  city: 'New York'
};

signup(user);
//next
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

var a = points.map(([ x, y ]) => {
  return { x, y };
});
console.log(a);
//Practice 1
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}
//Practice 2
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};
});
//Practice 3
const numbers = [1, 2, 3];

function double([num, ...rest]) {
    if (!num) { return []; }

    return [num * 2, ...double(rest)];
}
