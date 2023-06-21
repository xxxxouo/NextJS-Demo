import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(){
  const observerRef = useRef(null)
  const intersectionObserverRef = useRef(null)
  const [ observerIsSet, setObserverIsSet ] = useState(false)
  const [ isIntersecting, setIsIntersecting ] = useState(false)

  useEffect(()=>{
    const checkObserverIsIntersecting = ([entry])=>{
      setIsIntersecting(entry.isIntersecting)
    }

    if(!observerIsSet){
      intersectionObserverRef.current = new IntersectionObserver(checkObserverIsIntersecting,{
        threshold:1
      })
      intersectionObserverRef.current.observe(observerRef.current)
      setObserverIsSet(true)
    }
    return ()=>{
      if( intersectionObserverRef.current && observerIsSet) intersectionObserverRef.current.disconnect()
    }

  },[observerIsSet])
  return {
    observerRef,
    isIntersecting
  }
} 