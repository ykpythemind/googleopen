chrome.extension.onMessage.addListener( function(req, sender, callback) {
  if (sender.tab) {
    if (req.text !== undefined) {
      var url = encodeURI("http://www.google.co.jp/search?q=" + req.text);
      var properties = { url: url };
      chrome.tabs.create(properties, function(tab){} );
    }
  }
});
