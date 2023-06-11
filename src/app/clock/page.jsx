"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
const ParticleClock = dynamic(()=>import('@/components/particleClock/ParticleClock'),{
  loading:()=>(
    <p>loading...</p>
  )
})
function page() {
  return (
    <div>
      <ParticleClock /> 
    </div>
  )
}

export default page