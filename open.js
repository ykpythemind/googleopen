window.addEventListener('keydown', function(e) {
  // control + G
  if (e.ctrlKey && e.keyCode == 71) {
    var url = window.getSelection().toString();
    if (url.length > 0) {
      chrome.extension.sendMessage( { text: url }, function(response) {} );
    }
  }
}, false);
