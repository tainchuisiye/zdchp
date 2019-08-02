import typish from './typewriter.js'
import CountUp from 'countup.js'
require('@css/normal/code.css')
require('@css/normal/cursor.css')
require('@css/normal/normal.css')
// 配置在一起的日子
const startTime = '2019/02/24'
// preload
document.getElementById('birthday').remove()
let s1 = require('@img/i-miss-u.png')
let s2 = require('@img/lips.svg')
let img1 = document.createElement('img')
let img2 = document.createElement('img')
img1.setAttribute('src', s1)
img2.setAttribute('src', s2)

function go () {
  typish('#typer')
    .type('/**', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('猪大春啊~今天也要开心鸭！！！', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .wait(10)
    .type('哥哥教你写代码,  等下。。。', '<span class="note">')
    .wait(10)
    .type('么么哒~o(*≧▽≦)ツ', '<span class="note">', 0)
    .wait(30)
    .then(() => {
      memeda()
    })
    .wait(25)
    .type('0', '<br>')
    .type('*/', '<span class="note">')
    .type('0', '<br>') // 换行
    .type('let', '<span class="purple">')
    .type('0', '<span class="blank">')
    .type('world', '<span class="blue">')
    .type('0', '<span class="blank">')
    .type('=', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('{', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('you', '<span class="blue">')
    .type(':', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('1', '<span class="blue">')
    .type(',', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('...{}', '<span class="blue">')
    .type(',', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('me', '<span class="blue">')
    .type(':', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('0', '<span class="blue">')
    .type('0', '<span class="blank">')
    .type('}', '<span class="gray">')
    .type('0', '<br>') // 换行
    .type('let', '<span class="purple">')
    .type('0', '<span class="blank">')
    .type('{', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('you', '<span class="blue">')
    .type(',', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('me', '<span class="blue">')
    .type('0', '<span class="blank">')
    .type('}', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('=', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('world', '<span class="blue">')
    .type('0', '<br>') // 换行
    .wait(20)
    .type('try', '<span class="red">')
    .type('0', '<span class="blank">')
    .type('{', '<span class="gray">')
    .type('0', '<br>')
    .wait(20)
    .type('00', '<span class="blank">')
    .type('do', '<span class="yellow">')
    .type('0', '<span class="blank">')
    .type('{', '<span class="gray">')
    .type('0', '<br>') // 换行
    .type('0000', '<span class="blank">')
    .type('you', '<span class="blue">')
    .type('++', '<span class="gray">')
    .type(';', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('me', '<span class="blue">')
    .type('++', '<span class="gray">')
    .type('0', '<br>')
    .wait(5)
    .type('0000', '<span class="blank">')
    .type('you', '<span class="blue">')
    .type('-- ', '<span class="gray">')
    .type(';', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('me', '<span class="blue">')
    .type('-- ', '<span class="gray">')
    .type('0', '<br>')
    .wait(5)
    .type('0000', '<span class="blank">')
    .type('++', '<span class="gray">')
    .type('you', '<span class="blue">')
    .type(';', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('++', '<span class="gray">')
    .type('me', '<span class="blue">')
    .type('0', '<br>')
    .wait(10)
    .type('00', '<span class="blank">')
    .type('}', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('while', '<span class="yellow">')
    .type('0', '<span class="blank">')
    .type('(', '<span class="gray">')
    .type('you', '<span class="blue">')
    .type('0', '<span class="blank">')
    .type('&&', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('me', '<span class="blue">')
    .type(')', '<span class="gray">')
    .type('0', '<br>')
    .wait(5)
    .type('}', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('catch', '<span class="red">')
    .type('0', '<span class="blank">')
    .type('(', '<span class="gray">')
    .type('end_of_world', '<span class="blue">')
    .type(')', '<span class="gray">')
    .type('0', '<span class="blank">')
    .type('{', '<span class="gray">')
    .type('0', '<br>')
    .wait(5)
    .type('00', '<span class="blank">')
    .type('console', '<span class="green">')
    .type('.', '<span class="gray">')
    .type('log', '<span class="yellow">')
    .type('(', '<span class="gray">')
    .type(`'1000001000'`, '<span class="string-color">')
    .type(')', '<span class="gray">')
    .type('0', '<br>')
    .type('}', '<span class="gray">')
    .type('0', '<br>')
    .type('/**', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('给傻狗子解释（自圆其说系列）：', '<span class="note">')
    .wait(20)
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('我们是世界上两各自独立的个体', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('隔着茫茫人海', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('各自追逐自己的梦想， 却又活在同一片天空下', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('直到有一天，在人海中走出与0.00487~的你相遇', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('你就像1那样填补了0的另一半空缺', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('我想和你一起感受阳光下的温暖，经历风雨里的磕绊', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('然后一起前进', '<span class="note">')
    .type('0', '<br>')
    .type('00', '<span class="blank">')
    .type('向着世界的尽头......', '<span class="note">')
    .type('0', '<br>')
    .type('*/', '<span class="note">')
    .wait(50)
    .then(() => {
      transBoard('show', () => {
        foreverLove()
      })
    })
}
function memeda () {
  let lip = document.createElement('div')
  lip.className = 'lip'
  document.body.appendChild(lip)
  setTimeout(() => {
    lip.remove()
  }, 2500)
}
function transBoard (type, cb) {
  let board = document.querySelector('.board')
  board.style.display = 'block'
  setTimeout(() => {
    if (!type || type === 'hide') {
      board.style.right = 'calc(-100vw - 10px)'
    } else {
      board.style.right = '0'
    }
  }, 30)
  setTimeout(() => {
    cb && cb()
  }, 2000)
}
function foreverLove () {
  let showArea = document.querySelector('#showArea')
  let heartMain = document.querySelector('#heartMain')
  let foot = document.querySelector('.foot')
  let send = document.querySelector('#send')
  send.addEventListener('click', () => {
    changeHearbeat()
    stars()
  })
  showArea.className = 'show'
  // heartBg.style.display = 'block'
  heartMain.style.display = 'block'
  foot.style.display = 'block'
  let fastHeartbeat = null

  function changeHearbeat () {
    heartMain.classList.remove('heart-main')
    heartMain.classList.add('fast-hearbeat')
    if (fastHeartbeat) {
      clearTimeout(fastHeartbeat)
      fastHeartbeat = null
    }
    fastHeartbeat = setTimeout(() => {
      heartMain.classList.add('heart-main')
      heartMain.classList.remove('fast-hearbeat')
    }, 5920)
  }

  // 触摸心跳加快
  heartMain.addEventListener('mousedown', (e) => {
    changeHearbeat()
  })

  setTimeout(() => {
    count()
  }, 2000)
}
function count () {
  const date = new Date(`${startTime} 00:00:00`)
  let end = new Date()
  let seconds = (Date.parse(end) - Date.parse(date)) / 1000
  let days = Math.floor(seconds / (3600 * 24))
  let timer = document.querySelector('#timer')
  timer.style.display = 'block'
  let numAnim = new CountUp('count', 0, days, 0, 5)
  numAnim.start()
}
let clickNumber = 0
function stars () {
  let send = document.querySelector('#send')
  send.setAttribute('disabled', '')
  setTimeout(() => {
    send.removeAttribute('disabled')
  }, 2000)
  let max = 5
  let startsContainer = document.createElement('div')
  startsContainer.className = 'startsContainer'
  for (let i = 0; i < 30; i++) {
    let img = document.createElement('img')
    img.setAttribute('src', s1)
    img.setAttribute('class', 'stars')
    startsContainer.appendChild(img)
  }
  commentDom()
  setTimeout(answerDom, Math.random() * 2000)

  document.body.appendChild(startsContainer)
  let els = document.querySelectorAll('.startsContainer')
  let current = els.length
  if (current > max) {
    els[0].remove()
  }
}

function commentDom () {
  let comments = document.querySelectorAll('.comment')
  if (comments) {
    const comentsLength = comments.length
    if (comentsLength > 7) {
      for (let i = 0; i < comentsLength; i++) {
        comments[i].remove()
      }
    }
  }

  let comment = document.createElement('div')
  comment.className = 'comment'
  comment.style.bottom = 60 + clickNumber * 76 + 'px'
  comment.innerHTML = '我想你了'
  document.body.appendChild(comment)
}

function answerDom () {
  const _answerList = ['我也想你~', '不，我更想你~', '好啦！我也想你', '好无聊啊你~，想你想你想你...']
  const _randomList = ['好啦！', '么么~', '好无聊啊，狗子']
  const _test = clickNumber >= _answerList.length ? _randomList[Math.round(Math.random() * (_randomList.length - 1))] + '想你想你想你...' : _answerList[clickNumber]
  const _answerDomList = document.querySelectorAll('.answer')
  let _answerDomLength = _answerDomList.length

  if (_answerDomLength > 7) {
    for (let i = 0; i < _answerDomLength; i++) {
      _answerDomList[i].remove()
    }
    clickNumber = 0
  }

  let _answerDom = document.createElement('div')
  _answerDom.className = 'answer'
  _answerDom.style.bottom = 100 + clickNumber * 76 + 'px'
  _answerDom.innerHTML = _test
  document.body.appendChild(_answerDom)
  clickNumber++
}

export {
  go
}
