function _back() {
  console.log('background.js')
}
console.log("running...")


var views = chrome.extension.getViews({type:'popup'});
var popup = null
if(views.length > 0) {
    popup = views[0];
    // 直接访问popup的函数
    popup.test();
}

chrome.runtime.onMessage.addListener(function(message, sender, callback) {
  console.log(mesasge); // meesage content
  callback && callback('yes this from background')
});

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, 'message content', function (res) {
      console.log('from content:', res);
  });
})