import '../css/style.css'
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

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
  });
}
get_cc_p();
