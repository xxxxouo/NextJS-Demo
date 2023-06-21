import React, { useEffect, useState } from 'react'

export function useDPR() {
  const [ dpr, setDpr ] = useState(null)
  
  useEffect(()=>{
    const handleDpr = (e)=>{
      setDpr(window.devicePixelRatio);
    }
    handleDpr()
    window.addEventListener('resize',handleDpr)
  },[])
  return (
    dpr
  )
}
