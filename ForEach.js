/*var colors = [ 'red', 'blue', 'green' ];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color);
});
*/
var numbers = [1,2,3,4,5];
var sum = 0;
function adder(number) {
  sum += number;
}
numbers.forEach(adder);
console.log(sum);

//Practice 1
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    /*for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }*/

    posts.forEach(function(post) {
        return savePost(post);
    })
}
//Practice 2
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
    var area = image.height*image.width;
    areas.push(area);
})

console.log(areas);
