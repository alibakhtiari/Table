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
     return (num / 1000).toFixed(1) + ' هزار‌دلار'; 
  } else if (num > 1000000 && num < 1000000000) {
     return (num / 1000000).toFixed(1) + ' میلیون‌دلار'; 
  } else if (num > 1000000000) {
    return (num / 1000000000).toFixed(1) + ' میلیارد‌دلار'; 
  } else if (num < 900) {
     return num; 
  }
}
var dollarp;
//const myRequest = new Request('');
fetch('https://api.accessban.com/v1/data/sana/json')
.then(res => res.json())
.then(data => {
  dollarp = data.sana.data[16].p;
  document.querySelector('.dollar_price').innerHTML = dollarp;
})

  fetch("/simple-data/1.json")
    .then(res => res.json())
    .then(data => {
      if (data.data.length > 0) {
        var coins = "",
        color,bg_color,bg_shade,dp = document.querySelector('.dollar_price').innerHTML;
        data.data.forEach((item) => {
          if(parseFloat(item.changePercent24Hr).toFixed(2) > 0){
            bg_color = 'bg-green-400';
            bg_shade = 'bg-green-50';
          }
          else{
            bg_color = 'bg-red-400';
            bg_shade = 'bg-red-50';
          }
          if(parseFloat(item.vwap24Hr*item.changePercent24Hr/100).toFixed(2) > 0){
            color = 'text-green-500';
          }
          else{
            color = 'text-red-500'
          }
          coins += '<div class="w-full flex flex-col justify-center items-center shadow-lg '+ bg_shade +' rounded-lg">';
          coins += '<img class="coin-img w-14 h-14 mt-5" src="coins/' + item.symbol + '.svg" alt="' + item.id + '">';
          coins += '<h2 class="coin-header capitalize ltr text-center font-bold p-2">'+ item.rank + '. '+ item.id + '<br><span class="text-xs"> (' + item.symbol + ')</span></h2>';
          coins += '<div class="flex justify-center align-middle text-center items-center p-2"><div><h5 class="coin-price-usd">$' + ThousandSep(parseFloat(item.priceUsd).toFixed(2)) + '</h5><h6 class="rtl">' + ThousandSep(Math.floor(item.priceUsd * dp / 10)) + ' تومان </h6></div><div class="pl-5"><h3 id="coin_percentage" class="flex align-middle justify-center items-center p-2 text-sm rounded-full font-bold '+ bg_color +' text-white w-14 h-14">' + parseFloat(item.changePercent24Hr).toFixed(2) + '%</h3></div></div>';
          coins += '<div class="text-right m-5 p-3 bg-white border border-orange-300 rtl text-xs"><div class="inline-flex py-2 justify-between w-full"><h6 class="pl-5 font-semibold">حجم بازار:</h6><span class="font-bold">'+ numberFormatter(item.marketCapUsd) +'</span></div>';
          coins += '<div class="inline-flex pb-2 w-full justify-between"><h6 class="pl-5 font-semibold">تغییرات 24 ساعته:</h6><span class="'+ color +' ltr font-bold">'+ ThousandSep(parseFloat(item.vwap24Hr*item.changePercent24Hr/100).toFixed(2)) +'</span><span class="'+ color +' pr-1 font-bold"> دلار</span></div></div></div>';
          
        });
        document.getElementById('coins_outer').innerHTML = coins; 

      }
    })


var percentage = {};
fetch("https://api.coingecko.com/api/v3/global")
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
      cryptofarsi = "بیت‌کوین";
      break;
      case 'eth':
      cryptofarsi = "اتریوم";
      break;
      case 'bnb':
      cryptofarsi = "بایننس‌کوین";
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
      cryptofarsi = "یو‌اس‌دی کوین";
      break;
      case 'doge':
      cryptofarsi = "دوج‌کوین";
      break;
      default:
      cryptofarsi = item;
    }
      market_caps += '<tr class="odd:bg-orange-100"><td class="w-8/12 lg:w-7/12 text-right py-3 px-4 border border-orange-200"><img class="w-6 h-6 inline-block" src="coins/' + item + '.svg" alt="' + item + '"> '+ cryptofarsi + ' </td><td class="w-4/12 lg:w-5/12 text-center py-3 px-4 border border-orange-200">' + parseFloat(percentage[item]).toFixed(2) + ' %</td></tr>';

  }
  document.getElementById('market_caps').innerHTML = market_caps;
})

function showdate() { 
  var week = new Array("يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه"),
      months = new Array("فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دی","بهمن","اسفند"),
      a = new Date(),
      d = a.getDay(), 
      day = a.getDate(), 
      month = a.getMonth()+1, 
      year = a.getYear(),
      hour = a.getHours(),
      min = (a.getMinutes()<10?'0':'') + a.getMinutes(), 
      y,i;
  year=(window.navigator.userAgent.indexOf('MSIE')>0)? year:1900+year;
  if (year== 0){year=2000;} 
  if (year<100){year +=1900;} 
  y=1; 
  for(i=0;i<3000;i+=4) { 
      if (year==i) {y=2;} 
      } 
  for(i=1;i<3000;i+=4) { 
      if (year==i) {y=3;} 
      } 
if (y==1) { 
      year -= ( (month < 3) || ((month == 3) && (day < 21)) )? 622:621; 
      switch (month) { 
          case 1: (day<21)? (month=10, day+=10):(month=11, day-=20); break; 
          case 2: (day<20)? (month=11, day+=11):(month=12, day-=19); break; 
          case 3: (day<21)? (month=12, day+=9):(month=1, day-=20);   break; 
          case 4: (day<21)? (month=1, day+=11):(month=2, day-=20);   break; 
          case 5: 
          case 6: (day<22)? (month-=3, day+=10):(month-=2, day-=21); break; 
          case 7: 
          case 8: 
          case 9: (day<23)? (month-=3, day+=9):(month-=2, day-=22);  break; 
          case 10:(day<23)? (month=7, day+=8):(month=8, day-=22);    break; 
          case 11: 
          case 12:(day<22)? (month-=3, day+=9):(month-=2, day-=21);  break; 
     default:          break; 
      } 
      } 
if (y==2) { 
      year -= ( (month < 3) || ((month == 3) && (day < 20)) )? 622:621; 
      switch (month) { 
          case 1: (day<21)? (month=10, day+=10):(month=11, day-=20); break; 
          case 2: (day<20)? (month=11, day+=11):(month=12, day-=19); break; 
          case 3: (day<20)? (month=12, day+=10):(month=1, day-=19);   break; 
          case 4: (day<20)? (month=1, day+=12):(month=2, day-=19);   break; 
          case 5: (day<21)? (month=2, day+=11):(month=3, day-=20);   break; 
          case 6: (day<21)? (month=3, day+=11):(month=4, day-=20); break; 
          case 7: (day<22)? (month=4, day+=10):(month=5, day-=21);   break; 
          case 8: (day<22)? (month=5, day+=10):(month=6, day-=21);   break; 
          case 9: (day<22)? (month=6, day+=10):(month=7, day-=21);  break; 
          case 10:(day<22)? (month=7, day+=9):(month=8, day-=21);    break; 
          case 11:(day<21)? (month=8, day+=10):(month=9, day-=20);   break; 
          case 12:(day<21)? (month=9, day+=10):(month=10, day-=20);  break; 
     default:          break; 
      } 
      } 
if (y==3) { 
      year -= ( (month < 3) || ((month == 3) && (day < 21)) )? 622:621; 
      switch (month) { 
          case 1: (day<20)? (month=10, day+=11):(month=11, day-=19); break; 
          case 2: (day<19)? (month=11, day+=12):(month=12, day-=18); break; 
          case 3: (day<21)? (month=12, day+=10):(month=1, day-=20);   break; 
          case 4: (day<21)? (month=1, day+=11):(month=2, day-=20);   break; 
          case 5: 
          case 6: (day<22)? (month-=3, day+=10):(month-=2, day-=21); break; 
          case 7: 
          case 8: 
          case 9: (day<23)? (month-=3, day+=9):(month-=2, day-=22);  break; 
          case 10:(day<23)? (month=7, day+=8):(month=8, day-=22);    break; 
          case 11: 
          case 12:(day<22)? (month-=3, day+=9):(month-=2, day-=21);  break; 
     default:          break; 
      } 
      }
      document.getElementById("date_place_holder").innerHTML =   week[d]+" "+day+" "+months[month-1]+" ساعت: " + hour + ":" + min;
}
showdate();
