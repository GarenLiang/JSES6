function makeAjaxRequest(url, method = 'GET') {
  return method;
}

makeAjaxRequest('google.com', undefined);
makeAjaxRequest('google.com', 'POST');
//next
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 99999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
console.log(createAdminUser(user));
//Practice 1
function sum(a = 0, b = 0) {

  return a + b;
}
//Practice 2
function addOffset(style = {offset: '10px'}) {

  return style;
}
