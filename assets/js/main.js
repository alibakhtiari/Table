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
*/
function ThousandSep(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var dollarp = 0;
const myRequest = new Request('https://api.accessban.com/v1/data/sana/json');
fetch(myRequest)
.then(response => response.json())
.then(data => {
  return dollarp = parseFloat(data.sana.data[16].p);
}).then(ali => {
  fetch("/simple-data/1.json")
    .then(res => res.json())
    .then(data => {
      if (data.data.length > 0) {
        var coins = "";
        data.data.forEach((item) => {
          coins += '<div class="w-full flex flex-col justify-center items-center rounded shadow-lg bg-white">';
          coins += '<img class="coin-img w-16 h-16" src="coins/' + item.symbol + '.svg" alt="' + item.id + '">';
          coins += '<h2 class="coin-header capitalize">'+ item.rank + '. '+ item.id + '<span> (' + item.symbol + ')</span></h2><h5 class="coin-price-usd">$' + ThousandSep(Math.floor(item.priceUsd)) + '</h5>';
          coins += '<h6 class="coin-price-irr rtl">' + ThousandSep(Math.floor(item.priceUsd * dollarp / 10)) + ' تومان </h6><h3 class="coin-per">' + parseFloat(item.changePercent24Hr).toFixed(2) + ' %</h3></div>';

        });
        document.getElementById('coins_outer').innerHTML = coins;

      }
    })
})

var percentage = {};
fetch("/simple-data/2.json")
.then(resgecko => resgecko.json())
.then(datagecko => {
      return percentage = datagecko.data.market_cap_percentage;
}).then( ali =>{
  var market_caps = "",
  item;
  for (item in percentage){
    var cryptofarsi =""
    switch(item){
      case 'btc':
      cryptofarsi = "بیت کوین";
      break;
      case 'eth':
      cryptofarsi = "اتریوم";
      break;
      case 'bnb':
      cryptofarsi = "بایننس کوین";
      break;
      case 'usdt':
      cryptofarsi = "اتریوم";
      break;
      case 'ada':
      cryptofarsi = "کاردانو";
      break;
      case 'sol':
      cryptofarsi = "سولانا";
      break;
      case 'xrp':
      cryptofarsi = "ریپل";
      break;
      case 'dot':
      cryptofarsi = "پولکادات";
      break;
      case 'shib':
      cryptofarsi = "شیبا اینو";
      break;
      case 'usdc':
      cryptofarsi = "یو اس دی کوین";
      break;
      default:
      cryptofarsi = item;
    }
      market_caps += '<tr><td class="w-2/3 text-right py-3 px-4"><img class="w-6 h-6 inline-block" src="coins/' + item + '.svg" alt="' + item + '"> '+ cryptofarsi + ' </td><td class="w-1/3 text-center py-3 px-4">' + parseFloat(percentage[item]).toFixed(2) + ' %</td></tr>';

  }
  document.getElementById('market_caps').innerHTML = market_caps;
})

