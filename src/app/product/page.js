"use client"
import React,{ Suspense } from 'react'
import dynamic from 'next/dynamic';


export async function generateMetadata({params,searchParams}){
  const data = await new Promise((res)=>{setTimeout(res("商品"),1000)})
   return {
    title:data
   }
}

const DynamicPage = dynamic(()=>import('./components/ProductList'))
const DynamicBtn = dynamic(()=>import('./components/Bottom'))
export default function page() {
  return (
    <div>
      <DynamicPage />
      <DynamicBtn />
    </div>
  )
}
