// // 宇宙特效
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let w = canvas.width = window.innerWidth
let h = canvas.height = window.innerHeight

let hue = 217
let stars = []
let count = 0
let maxStars = 1300// 星星数量

let canvas2 = document.createElement('canvas')
let ctx2 = canvas2.getContext('2d')
canvas2.width = 100
canvas2.height = 100
let half = canvas2.width / 2
let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
gradient2.addColorStop(0.025, '#CCC')
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
gradient2.addColorStop(1, 'transparent')

ctx2.fillStyle = gradient2
ctx2.beginPath()
ctx2.arc(half, half, half, 0, Math.PI * 2)
ctx2.fill()

// End cache

function random (min, max) {
  if (arguments.length < 2) {
    max = min
    min = 0
  }

  if (min > max) {
    var hold = max
    max = min
    min = hold
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}

const maxOrbit = (x, y) => {
  let max = Math.max(x, y)
  let diameter = Math.round(Math.sqrt(max * max + max * max))
  return diameter / 2
  // 星星移动范围，值越大范围越小，
}

class Star {
  constructor () {
    this.orbitRadius = random(maxOrbit(w, h))
    this.radius = random(60, this.orbitRadius) / 8
    // 星星大小
    this.orbitX = w / 2
    this.orbitY = h / 2
    this.timePassed = random(0, maxStars)
    this.speed = random(this.orbitRadius) / 50000
    // 星星移动速度
    this.alpha = random(2, 10) / 10
    count++
    stars[count] = this
  }
  draw () {
    let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
    let y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
    let twinkle = random(10)
    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05
    }
    ctx.globalAlpha = this.alpha
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
    this.timePassed += this.speed
  }
}

// console.log('ctx', ctx)

for (var i = 0; i < maxStars; i++) {
  // eslint-disable-next-line no-new
  new Star()
}

const animation = () => {
  ctx.globalCompositeOperation = 'source-over'
  ctx.globalAlpha = 0.5 // 尾巴
  ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)'
  ctx.fillRect(0, 0, w, h)

  ctx.globalCompositeOperation = 'lighter'
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw()
  };
  // console.log('234', 234)
  window.requestAnimationFrame(animation)
}
console.log('ctx2', ctx2)
export default animation
