import React, { useEffect, useRef, useState } from 'react'

export default function index() {
  const [txtv, setTxtv] = useState('')
  const iref = useRef()
  function clas (){
    return `border bordersolid select-none`
  }

  const handlePaste = (e)=>{
    if(e.clipboardData.files.length>0){
      e.preventDefault()
      const file = e.clipboardData.files[0]
      const reader = new FileReader()
      reader.onload = (e)=>{
        const img = document.createElement('img')
        img.src = e.target.result
        iref.current.appendChild(img)
      }
      reader.readAsDataURL(file)
    }
  }

  useEffect(()=>{
    const at = window.document.addEventListener("copy",(e)=>{
      e.preventDefault()
      navigator.clipboard.writeText("请付费")
    })
    return ()=>{
      window.document.removeEventListener('copy',at)
    }
  })
  useEffect(()=>{
    navigator.clipboard.readText().then((text)=>{
      if(text) setTxtv(text)
      return
    }).catch((e)=>{
      console.log(e);
    })
  })
  return (
    <>
      <hr />
      <p className=' text-red-400'>复制我试试</p>
      <>
        <label  htmlFor="txt" className=' mr-3 select-none'>上一次复制的内容:</label>
        <input className={clas()} type="text" id='txt' onChange={()=>{}} disabled value={txtv} />
      </>
      <hr className=' mt-5' />
      <>
      <label htmlFor="paste" className=' mr-3 select-none' >请将截图/图片文件黏贴其中:</label>
      <div contentEditable  ref={iref}  className=' border border-solid' id='paste' onPaste={handlePaste}>
        {/* <img src="" alt="" /> */}
      </div>
      </>
    </>
  )
}
