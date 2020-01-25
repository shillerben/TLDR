chrome.runtime.onInstalled.addListener(function() {
    console.log("installed");
  });

  chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab.url);
    console.log("sending to smmry");
  });