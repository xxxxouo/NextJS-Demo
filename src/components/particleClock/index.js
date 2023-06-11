const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d',{
  willReadFrequently:true
})

function initCanvasSize(){
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
}
initCanvasSize()

// 获取 [min，max] 范围内的随机整数
function getRandom(min,max){
  return Math.floor(Math.random()*(max + 1 - min)+min);
}

class Particle{
  constructor(){
    // 获取半径及中心点
    const r = Math.min(canvas.width,canvas.height)/2
    const cx = canvas.width / 2
    const cy = canvas.height/ 2
    // 获取随机角度
    const rad = getRandom(0,360) * Math.PI/180
    this.x = cx + r *Math.cos(rad)
    this.y = cy + r *Math.sin(rad)
    this.size = getRandom(2 * devicePixelRatio , 7 * devicePixelRatio)
  }
  draw(){
    ctx.beginPath()
    ctx.fillStyle = '#5445544d'
    ctx.arc(this.x,this.y,this.size,0,2 *Math.PI)
    ctx.fill()
  }
}
const p = new Particle()
p.draw()