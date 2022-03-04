import '../css/style.css'
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

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
function ThousandSep(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function get_cc_p() {
  fetch('https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/top' , requestOptions).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  })
  .then((data) => {
    var coins = "",
        color, bg_color, bg_shade;
      data.data.forEach((item) => {
        if (item.cmc_rank <= 10) {
          if (item.percent_change_24h > 0) {
            bg_color = 'bg-green-400';
            bg_shade = 'bg-green-50';
          } else {
            bg_color = 'bg-red-400';
            bg_shade = 'bg-red-50';
          }
          if (item.percent_change_24h > 0) {
            color = 'text-green-500';
          } else {
            color = 'text-red-500'
          }
          coins += '<div class="w-full flex flex-col justify-center items-center shadow-lg ' + bg_shade + ' rounded-lg">';
          coins += '<div class="inline-flex items-center my-2"><img class="coin-img w-12 h-12" src="' + item.logo + '" alt="' + item.name + '">';
          coins += '<h2 class="coin-header capitalize ltr text-center font-bold ml-2 ' + item.symbol + '">' + item.cmc_rank + '. ' + item.name + '<br><span class="text-xs"> (' + item.symbol + ')</span></h2></div>';
          coins += '<div class="flex justify-center align-middle text-center items-center p-2"><div><h5 class="coin-price-usd">$' + ThousandSep(parseFloat(item.price).toFixed(2)) + '</h5><h6 class="rtl">' + ThousandSep(Math.floor(item.price * usdtp / 10)) + ' تومان </h6></div><div class="pl-5"><h3 id="coin_percentage" class="flex align-middle justify-center items-center p-2 text-sm rounded-full font-bold ' + bg_color + ' text-white w-14 h-14">' + parseFloat(item.percent_change_24h).toFixed(2) + '%</h3></div></div></div>';
        }
      });
      document.getElementById('coins_outer').innerHTML = coins;
  })
  .catch((error) => {
    document.getElementById('app').classList.add('error');
    console.log(error);
  });
}
get_cc_p();
showdate();