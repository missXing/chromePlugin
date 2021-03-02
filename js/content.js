console.log('hello, from content.js');

chrome.runtime.sendMessage('message content', function (res){
  console.log('from background:', res);
});

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
  console.log(message, sender);
  callback && callback('yes this from content')
});

window.addEventListener("message", function(message) {
  console.log('来了老弟！', message.data);
}, false);

(function () {
  var path = 'js/inject.js';
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  // 注意，路径需用Chrome API 生成，这个方法可以获得插件的资源的真实路径。
  // 类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  script.src = chrome.extension.getURL(path);
  script.onload = function () {
    // 在执行完代码之后移除script标签
    this.parentNode.removeChild(this);
  }
  document.body.appendChild(script);
})();