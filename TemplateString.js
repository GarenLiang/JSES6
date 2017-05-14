function getMessage() {
  const year = new Date().getFullYear();

  return `The year is ${year}`;

}
console.log(getMessage());

//next
function doubleMessage(number) {
  return `Your number doubled is ${(2 * number)}`;
}
//next
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
