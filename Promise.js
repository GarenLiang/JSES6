promise = new Promise((resolve, reject) => {
  var request = new XHTMLRequest()

  request.onload = () => {
    resolve();
  };
});

promise
  .then(() => console.log('finally finished'));
  .then(() => console.log('I was also run'));
  .catch(() => console.log('uh oh'));
//next
url = "https://";
fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error));
