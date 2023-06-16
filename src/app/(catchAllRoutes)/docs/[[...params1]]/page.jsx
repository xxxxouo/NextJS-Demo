"use client"
import React from 'react'
import dynamic from 'next/dynamic';

const ScreenRecord = dynamic(()=>import('../components/ScreenRecord'),{
  loading:()=> (
    <p>loading....</p>
  )
})

function page({params:{params1=[]}}) {

  if(params1.length == 2){
    return (
      <h1>
        当前路由是{params1[0]} 下的 {params1[1]}
      </h1>
    )
  }else if (params1.length == 1){
    return (
    <h1>
      当前路由 是 {params1[0]}
    </h1>)
  }
  return (
    <div>
      所有路由模块
      <ScreenRecord />
      <div>
        <div className=' mb-8'>1</div>
      </div>
      <div>
        <div className=' mt-8'>2</div>
      </div>
    </div>
  )
}

export default page