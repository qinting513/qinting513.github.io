// 网页当前状态判断
function setVisibleEvent() {
  let hidden
  let visibilityState
  let visibilityChange
  if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden'
    visibilityChange = 'visibilitychange'
    visibilityState = 'visibilityState'
  } else if (typeof document.mozHidden !== 'undefined') {
    hidden = 'mozHidden'
    visibilityChange = 'mozvisibilitychange'
    visibilityState = 'mozVisibilityState'
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden'
    visibilityChange = 'msvisibilitychange'
    visibilityState = 'msVisibilityState'
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden'
    visibilityChange = 'webkitvisibilitychange'
    visibilityState = 'webkitVisibilityState'
  }
  console.log('visibilityChange==', visibilityChange)
  // 添加监听器，在title里显示状态变化
  document.addEventListener(visibilityChange, function() {
    const isHidden = document[hidden]
    const state = document[visibilityState]
    if (!isHidden) {
      console.log('请求数据')
    }
    console.log('hidden=', isHidden)
    console.log('state =', state)
  }, false)
  // 当前窗口得到焦点
  window.onfocus = function() {
  }
  // 当前窗口失去焦点
  window.onblur = function() {
    console.log('onblur=')
  }
}
export default setVisibleEvent
