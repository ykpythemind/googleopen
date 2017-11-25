chrome.extension.onMessage.addListener((req, sender, callback) => {
  if (sender.tab) {
    if (req.text !== undefined) {
      const url = `http://www.google.co.jp/search?q=${encodeURIComponent(req.text)}`;
      chrome.tabs.create({url: url}, (tab) => {});
    }
  }
});
