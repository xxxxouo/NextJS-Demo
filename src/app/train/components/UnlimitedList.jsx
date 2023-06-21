"use client"
import React, { useEffect,useState,useLayoutEffect,useMemo } from 'react'
import styled from 'styled-components'
import { randomImg,loadImg } from '@/utils'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Ul = styled.ul`
display:flex;
flex-direction: column;
&>img{
  width:300px;
  height:300px;
  margin: 10px 0;
  border:1px solid #000;
  display:inline-block;
  padding:10px;
  opacity:0;
  border-radius:10px;
  transition:150ms;
  transform:translateX(-50px);
}
&>img.show{
  opacity:1;
  transform:translateX(0px);
}
`

function UnlimitedList() {
  const { observerRef,isIntersecting } = useIntersectionObserver()
  const [ imgList, setImgList ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [observer, setObserver] = useState(null)

  useEffect(() => {
    console.log(1);
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry =>{
          entry.target.classList.toggle('show', entry.isIntersecting);
          if(entry.isIntersecting) observer.unobserve(entry.target);
      });
    },{
      threshold:.3,
    });
    setObserver(observer)
  },[])
  
  
  useEffect(()=>{
    if(isIntersecting && !loading){
      setLoading(true)
      loadImg().then(res =>{
        setImgList((pre)=>{
          return [...pre,...res]
        })
        setLoading(false)
      })
    }
  },[isIntersecting])

  useEffect(()=>{
    if(imgList.length == 0 ) return
    const Imgs = document.querySelectorAll('img:not(.observed)')
    
    Imgs.forEach(item => {
      item.classList.add('observed')
      observer.observe(item)
    })

  },[imgList])
  


  return (
    <div className=' w-full'>
      <hr />
      <div className=' w-full lg:w-1/3 lg:ml-2'>
        <Ul id='root' className=' w-full'>
          {
            imgList?.length>0 && 
            imgList.map((item,idx) => (
              <img key={idx} src={item} alt="小洁大王" />
            ))
          }
          {
            loading && <h3 className=' text-center'>Loading....</h3>
          }
        </Ul>
        <div ref={observerRef}></div>
      </div>
    </div>
  )
}

export default React.memo(UnlimitedList)