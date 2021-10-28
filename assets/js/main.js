import '../css/style.css'
/*
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    
    var promise = Promise.race([
    fetch('https://api.coincap.io/v2/assets?limit=10', requestOptions)
    .then(response => response.text()),
    new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Timeout')), 3200)
    )
    ]);
    
    promise.then(result => console.log(result)),
    promise.catch(error => console.log(error));

*/        
var promise = Promise.race([
  fetch('/simple-data/1.json')
  .then(function (response) {
      return response.json();
  }),
  new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error('Timeout')), 3200)
  )
]);
promise.then(result => console.log(result.data)),
promise.catch(error => console.log(error));
if (result.data.length > 0) {
  console.log('ok')
}

var dollarp = 0;
const myRequest = new Request('https://api.accessban.com/v1/data/sana/json');
fetch(myRequest)
.then(response => response.json())
.then(data => {
  return dollarp = parseFloat(data.sana.data[16].p);
})