const Http = new XMLHttpRequest();

// Need proxy to get around cors errors
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const smmryUrl = `https://api.smmry.com/&SM_API_KEY=${key}`;

chrome.runtime.onInstalled.addListener(function() {
    console.log("installed");
  });

  chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab.url);
    console.log(smmryUrl);
    console.log("sending to smmry");
    var url = proxyurl + smmryUrl + `&SM_URL=${tab.url}`;
    console.log(url);
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
  });