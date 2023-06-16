"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
const ParticleClock = dynamic(()=>import('@/components/particleClock/ParticleClock'),{
  loading:()=>(
    <p>loading...</p>
  )
})
function page() {
  console.log("%c欲买桂花同载酒,终不似少年游 \n金鳞岂是池中物,一遇风云便化龙","color:red;font-size:28px");
  console.log(`%c访问另一个域名:${process.env.APP_IMGURL}`,"");
  return (
    <div>
      <ParticleClock /> 
    </div>
  )
}

export default page