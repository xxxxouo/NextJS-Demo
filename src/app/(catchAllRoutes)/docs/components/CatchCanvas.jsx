import React, { useRef } from 'react'
import html2canvas from 'html2canvas'

export default function CatchCanvas() {
  const componentRef = useRef(null)

  const handleConvertToCanvas = ()=>{
    html2canvas(componentRef.current, {
    
    }).then(canvas => {
      document.body.appendChild(canvas)
    })
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <div ref={componentRef} className=''>
        <text className=' text-lg'>洁神牛逼👌</text>
      </div>
      <button onClickCapture={handleConvertToCanvas}>将元素转换为canvas</button>
    </div>
  )
}
