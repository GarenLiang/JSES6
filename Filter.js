var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'friut', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'friut', quantity: 3, price: 5 }
];
var filteredProducts = [];
products.filter(function(product) {
  return product.type === 'friut';
});

products.filter(function(product) {
  return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10
});
// next
var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));
//Practice 1
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
    return number  > 50;
});
//Practice 2
var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
    return user.admin === true;
});
//Practice 3
/*var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});
lessThanFifteen // [ 10 ];
*/
function reject(array, iteratorFunction) {
  var rejectedArray = array.filter(iteratorFunction);
  return array.filter((value) => {
    return !rejectedArray.includes(value);
  });
}
