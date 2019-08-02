document.getElementById('typer').remove()
document.getElementById('board').remove()
require('@css/birthday/voice.css')
require('@css/birthday/birthday.scss')
const c = require('./cake.js')
function start (cb) {
  console.log('come in')
  document.getElementById('birthday').style.display = 'block'
  c.draw()
  // createSvg()
  window.setTimeout(() => {
    go(cb)
  }, 6000)
}

// 创建svg相关元素
// function createSvg (tag, attr) {
//   if (!document.createElementNS) return // 防止IE8报错
//   let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
//   svg.setAttribute('class', 'icon')
//   svg.setAttribute('aria-hidden', 'true')
//   // svg.setAttribute('xlink:href', '#icon-xigua')
//   // for (var key in attr) {
//   //   switch (key) {
//   //     case 'xlink:href':// 文本路径添加属性特有
//   //       $svg[0].setAttributeNS('http://www.w3.org/1999/xlink', key, attr[key])
//   //       break
//   //     default:
//   //       $svg.attr(key, attr[key])
//   //   }
//   // }
//   let use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
//   use.setAttribute('xlink:href', '#icon-xigua')
//   // <use xlink:href="#icon-xigua"></use>
//   let bsd = document.getElementById('birthday')
//   svg.appendChild(use)
//   bsd.appendChild(svg)

//   // return svg
// };

function go (cb) {
  let vt = document.getElementById('voice_time')
  vt.innerHTML = `37″`
  let hb = document.getElementById('hb')
  let voice = document.getElementById('voice')
  vt.style.display = 'inline-block'
  voice.style.display = 'block'
  hb.style.display = 'block'
  vt.setAttribute('class', 'voice-time show')
  hb.setAttribute('class', 'show')
  voice.setAttribute('class', 'comment bottom-msg show')

  let canClick = true
  let audio = document.getElementById('audio')
  let audioSrc = require('../../music/hb.mp3')
  audio.setAttribute('src', audioSrc)

  let img = document.createElement('img')
  let src = require('@img/voice.png')
  img.setAttribute('src', src)
  img.setAttribute('class', 'voice')
  voice.appendChild(img)

  let voiceWhite = document.getElementById('voice_white')
  let img2 = document.createElement('img')
  let src2 = require('@img/voice-white.png')
  img2.setAttribute('src', src2)
  voiceWhite.appendChild(img2)
  // eslint-disable-next-line no-undef
  if (typeof cb === 'function') {
    cb()
  }

  voice.addEventListener('click', (e) => {
    e.stopPropagation()
    if (canClick) {
      canClick = false
      audio.play()
      cakes()
      setTimeout(() => {
        cakes()
      }, 8000)
      setTimeout(() => {
        cakes()
      }, 16000)
      audio.addEventListener('ended', () => {
        voice.style.display = 'block'
        voiceWhite.style.display = 'none'
        canClick = true
      })
      voice.style.display = 'none'
      voiceWhite.style.display = 'block'
    }
  })
}
function cakes () {
  let startsContainer = document.createElement('div')
  startsContainer.className = 'startsContainer'
  for (let i = 0; i < 30; i++) {
    let w = parseInt(Math.random() * 4, 10)
    let src
    switch (w) {
      case 0:
        src = require('@img/cake.png')
        break
      case 1:
        src = require('@img/gift.png')
        break
      case 2:
        src = require('@img/bell.png')
        break
      case 3:
        src = require('@img/snow.png')
        break
    }
    let img = document.createElement('img')
    img.setAttribute('src', src)
    img.setAttribute('class', 'stars')
    startsContainer.appendChild(img)
  }
  document.body.appendChild(startsContainer)
  let els = document.querySelectorAll('.startsContainer')
  let current = els.length
  if (current > 5) {
    els[0].remove()
  }
}
export {
  start
}
