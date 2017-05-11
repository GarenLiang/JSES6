var users = [
  { name: 'Jill' },
  { name: 'Alex', id: 4 },
  { name: 'Bill' },
  { name: 'Alex' }
];

users.find(function(user) {
  return user.name === 'Alex'
});
//next
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];
var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}
console.log(postForComment(posts, comment));
//Practice 1
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin === true;
});

//Practice 2
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
    return account["balance"] === 12;
});
//Practice 3
function findWhere(array, criteria) {
  var key = Object.keys(criteria)[0];
  return array.find(function(arr){
      return arr[key] === criteria[key];
  });
}
