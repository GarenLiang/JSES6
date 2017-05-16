function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

//next

function saveFile(url, data) {
  $.ajax({
    url,
    data,
    method: 'POST'
  });
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);

//Practice 1
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

console.log(COLORS);
//Practice 2
const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };
//Practice 3
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width,
    height
  };
}
//Practice 4
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
