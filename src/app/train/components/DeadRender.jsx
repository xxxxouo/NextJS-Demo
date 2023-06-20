import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { AlertCircle } from 'react-feather'

const Circle = styled.div`
animation: move 3s linear infinite;

@keyframes move {
  0% {
     transform: translateX(0);
    }
  50%{
    transform: translateX(10rem);
  }
  100% {
     transform:translateX(0);
  }
}
`

function DeadRender() {
  const [ tips, setTips ] = useState(false)
  const handleDead  = ()=>{
    deadFunc(5000)
  }
  const deadFunc = (time) =>{
    const nowTime = Date.now()
    while(Date.now() - nowTime < time){}
  }
  return (
    <div>
      <div className='flex items-center'>
        <button className=' px-3 py-2 border-green-400  border border-solid rounded-lg' onClick={handleDead}>卡死页面5秒</button>
        <AlertCircle onClick={()=>setTips(true)}/>
        {
          tips &&  <span>此球不受影响 transform 不在浏览器的渲染主线程中,在合成线程中,不会阻塞渲染</span>
        }
      </div>
      <div className=' w-full'>
        <Circle className=' rounded-full bg-red-400 w-16 h-16'></Circle>
      </div>
    </div>
  )
}

export default DeadRender