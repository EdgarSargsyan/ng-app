$.getJSON('http://95.183.10.25:3000/api/currencys2/btc_usd/1000/288', function (data) {
var processed_json = new Array();
$.map(data.data, function(obj, i) {
    processed_json.push([parseInt(obj.time)*1000, parseInt(obj.price)]);
});

    Highcharts.stockChart('container_chart', {


        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'Bitcoin'
        },

        series: [{
            name: 'Bitcoin (BTC)',
            data: processed_json,
            tooltip: {
                valueDecimals: 0
            }
        }]
    });
});