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

function numberFormatter(num) {
  if (num > 999 &&  num < 1000000) {
     return (num / 1000).toFixed(1) + ' هزار دلار'; 
  } else if (num > 1000000 && num < 1000000000) {
     return (num / 1000000).toFixed(1) + ' میلیون دلار'; 
  } else if (num > 1000000000) {
    return (num / 1000000000).toFixed(1) + ' میلیارد دلار'; 
  } else if (num < 900) {
     return num; 
  }
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
        var coins = "",
        color,bg_color;
        data.data.forEach((item) => {
          if(parseFloat(item.changePercent24Hr).toFixed(2) > 0){
            bg_color = 'bg-green-400';
          }
          else{
            bg_color = 'bg-red-400'
          }
          if(parseFloat(item.vwap24Hr*item.changePercent24Hr/100).toFixed(2) > 0){
            color = 'text-green-500';
          }
          else{
            color = 'text-red-500'
          }
          coins += '<div class="w-full flex flex-col justify-center items-center rounded shadow-lg bg-orange-100">';
          coins += '<img class="coin-img w-14 h-14 mt-5" src="coins/' + item.symbol + '.svg" alt="' + item.id + '">';
          coins += '<h2 class="coin-header capitalize ltr text-center font-bold p-2">'+ item.rank + '. '+ item.id + '<br><span class="text-xs"> (' + item.symbol + ')</span></h2>';
          coins += '<div class="flex justify-center align-middle text-center items-center p-2"><div><h5 class="coin-price-usd">$' + ThousandSep(parseFloat(item.priceUsd).toFixed(2)) + '</h5><h6 class="rtl">' + ThousandSep(Math.floor(item.priceUsd * dollarp / 10)) + ' تومان </h6></div><div class="pl-5"><h3 id="coin_percentage" class="flex align-middle justify-center items-center p-2 text-sm rounded-full font-bold '+ bg_color +' text-white w-14 h-14">' + parseFloat(item.changePercent24Hr).toFixed(2) + '%</h3></div></div>';
          coins += '<div class="text-right m-5 p-3 bg-white border border-orange-300 rtl text-xs"><div class="inline-flex py-2 justify-between w-full"><h6 class="pl-5 font-semibold">حجم بازار:</h6><span class="font-bold">'+ numberFormatter(item.marketCapUsd) +'</span></div>';
          coins += '<div class="inline-flex pb-2 w-full justify-between"><h6 class="pl-5 font-semibold">تغییرات 24 ساعته:</h6><span class="'+ color +' ltr font-bold">'+ ThousandSep(parseFloat(item.vwap24Hr*item.changePercent24Hr/100).toFixed(2)) +'</span><span class="'+ color +' pr-1 font-bold"> دلار</span></div></div></div>';
          
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
      market_caps += '<tr class="odd:bg-orange-100"><td class="w-2/3 text-right py-3 px-4 border border-orange-200"><img class="w-6 h-6 inline-block" src="coins/' + item + '.svg" alt="' + item + '"> '+ cryptofarsi + ' </td><td class="w-1/3 text-center py-3 px-4 border border-orange-200">' + parseFloat(percentage[item]).toFixed(2) + ' %</td></tr>';

  }
  document.getElementById('market_caps').innerHTML = market_caps;
})



