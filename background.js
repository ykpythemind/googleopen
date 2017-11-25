chrome.extension.onMessage.addListener( function(req, sender, callback) {
  if (sender.tab) {
    if (req.text !== undefined) {
      var url = "http://www.google.co.jp/search?q=" + encodeURIComponent(req.text);
      console.log(url);
      var properties = {url: url};
      chrome.tabs.create(properties, function(tab){} );
    }
  }
});
