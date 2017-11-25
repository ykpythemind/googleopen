window.addEventListener(
  'keydown',
  e => {
    // Control + G
    if (e.ctrlKey && e.keyCode == 71) {
      const url = window.getSelection().toString();
      if (url.length > 0) {
        chrome.extension.sendMessage({text: url}, response => {});
      }
    }
  },
  false,
);
