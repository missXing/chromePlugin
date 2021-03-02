var headers = [
  {
    key: "Content-type",
    value: "application/x-www-form-urlencode",
    enable: false
  },
  {
    key: "Test-Header",
    value: "按F进入坦克",
    enable: true
  }
];

function getHeaders() {
  return headers;
}

function addHeader(header) {
  headers.push(header);
}

function deleteHeader(index) {
  headers.splice(index, 1);
}

function toggleHeader(index) {
  headers[index].enable = !headers[index].enable;
}

// 请求拦截器
// On install 在被安装的时候去初始化
chrome.runtime.onInstalled.addListener(function(){
  // 添加事件  
  chrome.webRequest.onBeforeSendHeaders.addListener(requestHandle, {
      urls: ["<all_urls>"],// 拦截所有URL的请求
  },["blocking", "requestHeaders"]); // 阻塞式
  console.log('load');
});

// 添加header
function requestHandle(request) {
  var requestHeaders = request.requestHeaders;
  // 添加headers
  headers.forEach(function(item){
      if (item.enable) {
          requestHeaders.push({
              name: item.key,
              value: item.value,
          });
      }
  });
  return {requestHeaders};
}
