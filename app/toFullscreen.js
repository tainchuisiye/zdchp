// 进入全屏
export default () => {
  let main = document.body
  if (main.requestFullscreen) {
    return main.requestFullscreen()
  } else if (main.webkitRequestFullScreen) {
    return main.webkitRequestFullScreen()
  } else if (main.mozRequestFullScreen) {
    return main.mozRequestFullScreen()
  } else {
    return main.msRequestFullscreen()
  }
}
