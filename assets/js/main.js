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
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
  };

function ThousandSep(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showdate() {
  var week = new Array("يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"),
    months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"),
    a = new Date(),
    d = a.getDay(),
    day = a.getDate(),
    month = a.getMonth() + 1,
    year = a.getYear(),
    hour = a.getHours(),
    min = (a.getMinutes() < 10 ? '0' : '') + a.getMinutes(),
    y, i;
  year = (window.navigator.userAgent.indexOf('MSIE') > 0) ? year : 1900 + year;
  if (year == 0) {
    year = 2000;
  }
  if (year < 100) {
    year += 1900;
  }
  y = 1;
  for (i = 0; i < 3000; i += 4) {
    if (year == i) {
      y = 2;
    }
  }
  for (i = 1; i < 3000; i += 4) {
    if (year == i) {
      y = 3;
    }
  }
  if (y == 1) {
    year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
    switch (month) {
      case 1:
        (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
        break;
      case 2:
        (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
        break;
      case 3:
        (day < 21) ? (month = 12, day += 9) : (month = 1, day -= 20);
        break;
      case 4:
        (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
        break;
      case 5:
      case 6:
        (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
        break;
      case 7:
      case 8:
      case 9:
        (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
        break;
      case 10:
        (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
        break;
      case 11:
      case 12:
        (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
        break;
      default:
        break;
    }
  }
  if (y == 2) {
    year -= ((month < 3) || ((month == 3) && (day < 20))) ? 622 : 621;
    switch (month) {
      case 1:
        (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
        break;
      case 2:
        (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
        break;
      case 3:
        (day < 20) ? (month = 12, day += 10) : (month = 1, day -= 19);
        break;
      case 4:
        (day < 20) ? (month = 1, day += 12) : (month = 2, day -= 19);
        break;
      case 5:
        (day < 21) ? (month = 2, day += 11) : (month = 3, day -= 20);
        break;
      case 6:
        (day < 21) ? (month = 3, day += 11) : (month = 4, day -= 20);
        break;
      case 7:
        (day < 22) ? (month = 4, day += 10) : (month = 5, day -= 21);
        break;
      case 8:
        (day < 22) ? (month = 5, day += 10) : (month = 6, day -= 21);
        break;
      case 9:
        (day < 22) ? (month = 6, day += 10) : (month = 7, day -= 21);
        break;
      case 10:
        (day < 22) ? (month = 7, day += 9) : (month = 8, day -= 21);
        break;
      case 11:
        (day < 21) ? (month = 8, day += 10) : (month = 9, day -= 20);
        break;
      case 12:
        (day < 21) ? (month = 9, day += 10) : (month = 10, day -= 20);
        break;
      default:
        break;
    }
  }
  if (y == 3) {
    year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
    switch (month) {
      case 1:
        (day < 20) ? (month = 10, day += 11) : (month = 11, day -= 19);
        break;
      case 2:
        (day < 19) ? (month = 11, day += 12) : (month = 12, day -= 18);
        break;
      case 3:
        (day < 21) ? (month = 12, day += 10) : (month = 1, day -= 20);
        break;
      case 4:
        (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
        break;
      case 5:
      case 6:
        (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
        break;
      case 7:
      case 8:
      case 9:
        (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
        break;
      case 10:
        (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
        break;
      case 11:
      case 12:
        (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
        break;
      default:
        break;
    }
  }
  document.getElementById("date_place_holder").innerHTML = week[d] + " " + day + " " + months[month - 1] + " ساعت: " + hour + ":" + min;
}

function numberFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + ' هزار‌دلار';
  } else if (num > 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(1) + ' میلیون‌دلار';
  } else if (num > 1000000000) {
    return (num / 1000000000).toFixed(1) + ' میلیارد‌دلار';
  } else if (num < 900) {
    return num;
  }
}

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}
var dollarp;
fetch('https://api.accessban.com/v1/data/sana/json' , requestOptions)
  .then(status)
  .then(json)
  .then(function (data) {
    return dollarp = data.sana.data[16].p;
  })
  .then(function get_cc_p() {
    //fetch("https://api.coincap.io/v2/assets?limit=10" , requestOptions)
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10" , requestOptions)
    .then(status)
    .then(json)
    .then(function (data) {
      if (data.data.length > 0) {
        var coins = "",color, bg_color, bg_shade;
        data.forEach((item) => {
          if (item.price_change_percentage_24h > 0) {
            bg_color = 'bg-green-400';
            bg_shade = 'bg-green-50';
          } else {
            bg_color = 'bg-red-400';
            bg_shade = 'bg-red-50';
          }
          if (item.price_change_24h > 0) {
            color = 'text-green-500';
          } else {
            color = 'text-red-500'
          }
          coins += '<div class="w-full flex flex-col justify-center items-center shadow-lg ' + bg_shade + ' rounded-lg">';
          coins += '<div class="inline-flex items-center my-5"><img class="coin-img w-12 h-12" src="coins/' + item.symbol + '.svg" alt="' + item.id + '">';
          coins += '<h2 class="coin-header capitalize ltr text-center font-bold ml-2 ' + item.symbol + '">' + item.market_cap_rank + '. ' + item.id + '<br><span class="text-xs"> (' + item.symbol + ')</span></h2></div>';
          coins += '<div class="flex justify-center align-middle text-center items-center p-2"><div><h5 class="coin-price-usd">$' + ThousandSep(item.current_price) + '</h5><h6 class="rtl">' + ThousandSep(Math.floor(item.current_price * dollarp / 10)) + ' تومان </h6></div><div class="pl-5"><h3 id="coin_percentage" class="flex align-middle justify-center items-center p-2 text-sm rounded-full font-bold ' + bg_color + ' text-white w-14 h-14">' + parseFloat(item.price_change_percentage_24h).toFixed(2) + '%</h3></div></div>';
          coins += '<div class="text-right m-5 p-3 bg-white border border-orange-300 rtl text-xs"><div class="inline-flex py-2 justify-between w-full"><h6 class="pl-5 font-semibold">حجم بازار:</h6><span class="font-bold">' + numberFormatter(item.market_cap) + '</span></div>';
          coins += '<div class="inline-flex pb-2 w-full justify-between"><h6 class="pl-5 font-semibold">تغییرات 24 ساعته:</h6><span class="' + color + ' ltr font-bold">' + ThousandSep(parseFloat(item.price_change_24h).toFixed(2)) + '</span><span class="' + color + ' pr-1 font-bold"> دلار</span></div></div></div>';

        });
        document.getElementById('coins_outer').innerHTML = coins;

      }
    })
  })

var percentage = {};
fetch("https://api.coingecko.com/api/v3/global" , requestOptions)
  .then(status)
  .then(json)
  .then(function (data) {
    return percentage = data.data.market_cap_percentage;
  }).then(function print_cc_percentages() {
    var market_caps = "",
      item;
    for (item in percentage) {
      var cryptofarsi = ""
      switch (item) {
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
      market_caps += '<tr class="odd:bg-orange-100"><td class="w-8/12 lg:w-7/12 text-right py-3 px-4 border border-orange-200"><img class="w-6 h-6 inline-block" src="coins/' + item + '.svg" alt="' + item + '"> ' + cryptofarsi + ' </td><td class="w-4/12 lg:w-5/12 text-center py-3 px-4 border border-orange-200">' + parseFloat(percentage[item]).toFixed(2) + ' %</td></tr>';

    }
    document.getElementById('market_caps').innerHTML = market_caps;
  })


document.addEventListener('DOMContentLoaded', (event) => {
  showdate();
});