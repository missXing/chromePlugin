function mockApi () {
  console.log('----------------------this is from inject.js')
}

window.postMessage({"test": '你好！工具人！'}, '*');