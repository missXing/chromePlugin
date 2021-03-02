// popup页面被打开时，去后台获取最新header
window.onload = function () {
  let backend = chrome.extension.getBackgroundPage();
  // 调用background方法，获得headers
  let headers = backend.getHeaders();
  // 渲染header
  createElement(headers);
}

// 增加按钮
function addHeader() {
  let backend = chrome.extension.getBackgroundPage();
  let key = document.querySelector('.key');
  let value =  document.querySelector('.value');
  let header = {
      key: key.value,
      value: value.value,
      enable: true
    }
  // 调用background方法，新增headers
  backend.addHeader(header);
  createElement(header);
}
// 启用禁用、删除功能
function toggleHeader(index) {
let backend = chrome.extension.getBackgroundPage();
backend.toggleHeader(index);
}

function delHeader(index) {
let backend = chrome.extension.getBackgroundPage();
backend.deleteHeader(index);
}
