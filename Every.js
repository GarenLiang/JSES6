var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

computers.every(function(computer) {
  return computer.ram > 16;
});

computers.some(function(computer) {
  return computer.ram > 16;
});

//next
var names = [
  "Garen",
  "Jack",
  "Matthew"
];

names.every(function(name) {
  return name.length > 4;
});

names.some(function(name) {
  return name.length > 4;
});
//next
function Field(value) {
  this.value = value;
}
Field.prototype.validate = function () {
  return this.value.length > 0;
}
var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

username.validate() && password.validate();

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

if (formIsValid) {
  // allow user to submit
} else {
  // show an error message
}
//Practice 1
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hasSumitted === true;
});

//Practice 2
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(req) {
    return req.status === 'pending';
});
