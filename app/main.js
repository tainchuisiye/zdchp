/* eslint-disable no-unused-vars */
import toFullscreen from './toFullscreen.js'
import starSky from './js/starSky/start'
import { loop, launch } from './js/firework'
import './css/bubble.css'
import './css/stars.scss'
import './css/base.css'
// import 'http://at.alicdn.com/t/font_1290550_sqci11l0m5.css'
// import './css/iconfont/iconfont.js'

const years = require('./js/getBirthday.js').compute()

starSky()
const start = () => {
  if (!years) {
    require.ensure([], function (require) {
      const love = require('./js/normal/go.js')
      love.go()
    }, 'normal')
  } else {
    require.ensure([], function (require) {
      const b = require('./js/birthday/birthday')
      b.start(() => {
        setInterval(launch, 800)
        setInterval(loop, 1000 / 50)
      })
    }, 'birthday')
  }
}
function isWeiXin () {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') !== -1) {
    return true
  } else {
    return false
  }
}

const fullScreenBtn = document.getElementById('fullScreen')
fullScreenBtn.style.display = 'block'

const stepText = { '0': '哇~ 被你完坏了，需要再次点击!', '1': '来，点我啊！', '2': 'ei~,没想到吧~', '3': 'hahaha~，好了不逗你了' }

function roundPositionButton (num) {
  const _w = document.body.clientWidth * 3 / 4
  const _h = document.body.clientHeight - 30
  const _targe = fullScreenBtn.style
  const randomPosition = (num) => {
    return num * Math.random() + 'px'
  }
  _targe.bottom = randomPosition(_h)
  _targe.left = randomPosition(_w)
  _targe.right = randomPosition(_w)
  _targe.top = randomPosition(_h)
  _targe.width = 'auto'
  fullScreenBtn.innerText = stepText[clickNum] || 'ei~,点我啊'
}

// eslint-disable-next-line no-unused-vars
let clickNum = 0
function handleClick () {
  if (clickNum === 0) {
    toFullscreen()
    // setTimeout(starSky, 1000)
    // starSky()
  }
  // roundPositionButton(clickNum)
  clickNum++
  if (clickNum > 0) {
    // setTimeout(() => {
    // }, 0)
    toFullscreen()
    // starSky()
    document.getElementById('canvas').style.display = 'none'
    fullScreenBtn.style.display = 'none'
    start()
  }
}

// 进入全屏
const element = document.getElementById('fullScreen')
const element2 = document.getElementById('canvas')
element.addEventListener('click', handleClick)
element2.addEventListener('click', handleClick)
