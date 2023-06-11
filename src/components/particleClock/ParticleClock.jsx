"use client"
import React,{useEffect, useRef} from 'react'
import './index.css'
import { times } from 'lodash'

function ParticleClock() {
  const clockRef = useRef(null)

  const go  = ()=>{
    const ctx = clockRef.current.getContext('2d',{
      willReadFrequently:true
    })
    function initCanvasSize(){
      clockRef.current.width = window.innerWidth * devicePixelRatio;
      clockRef.current.height = window.innerHeight * devicePixelRatio;
    }
    initCanvasSize()
    // 获取 [min，max] 范围内的随机整数
    function getRandom(min,max){
      return Math.floor(Math.random()*(max + 1 - min)+min);
    }

    class Particle{
      constructor(){
        // 获取半径及中心点
        const r = Math.min(clockRef.current.width,clockRef.current.height)/2
        const cx = clockRef.current.width / 2
        const cy = clockRef.current.height/ 2
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
      moveTo(tx,ty){
        const duration = 500;  // 500毫秒的运动时间
        const sx = this.x
        const sy = this.y
        const xSpeed = (tx - sx) / duration
        const ySpeed = (ty - sy) / duration
        const startTime = Date.now()
        const _moveTo = ()=>{
          const t = Date.now() - startTime
          const x = sx + xSpeed * t
          const y = sy + ySpeed * t
          this.x = x
          this.y = y
          if(t >= duration){
            this.x = tx;
            this.y = ty
            return
          }
          requestAnimationFrame(_moveTo)
        }
        _moveTo()
      }
    }
    const partciles = []
    let text = null
    function clear(){
      ctx.clearRect(0,0,clockRef.current.width,clockRef.current.height)
    }

    function draw(){
      clear()
      update()
      partciles.forEach((p)=> p.draw())
      requestAnimationFrame(draw)
    }
    draw()

    function getText(){
      return new Date().toTimeString().substring(0,8)
    }
    
    function update(){
      const newText = getText()
      if(newText == text) return
      clear()
      text = newText
      const {height,width} = clockRef.current
      ctx.fillStyle = '#000'
      ctx.textBaseline = 'middle'
      ctx.font = `${140 * devicePixelRatio}px sans-serif`
      ctx.fillText(text,(width - ctx.measureText(text).width)/2,height/2)
      const points = getPoints()
      clear()
      for(let i = 0;i<points.length;i++){
        let p = partciles[i]
        if(!p){
          p = new Particle()
          partciles.push(p)
        }
        const [x,y] = points[i]
        p.moveTo(x,y)
      }
      if(points.length< partciles.length){
        partciles.splice(points.length)
      }
    }
    function getPoints(){
      const { width,height,data } = ctx.getImageData(0,0,clockRef.current.width,clockRef.current.height)
      const points = []
      const gap = 4
      for(let i = 0;i<width;i+=6){
        for(let j = 0;j< height; j+=6){
          const index = (i + j *width) *4
          const r = data[index]
          const g = data[index + 1]
          const b = data[index+ 2]
          const a = data[index+ 3]
          if(r === 0 && g === 0 && b === 0&& a === 255){
            points.push([i,j])
          }
        }
      }
      return points
    }
  }

  useEffect(()=>{
    if(clockRef.current) go()
  },[clockRef])
  

  return (
    <div>
      <canvas id='canvas' width={200} ref={clockRef}>粒子时钟</canvas>
    </div>
  )
}

export default ParticleClock