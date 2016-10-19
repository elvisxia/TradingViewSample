// Your code here!

window.onload = function (evt) {
    var myChart = new TradingView.widget({
        "width": 980,
        "height": 610,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "White",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "hideideas": true,
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650"
    });

}


