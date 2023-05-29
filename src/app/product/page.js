"use client"
import React,{ Suspense } from 'react'
import dynamic from 'next/dynamic';
import { Spinner } from 'pancake';
// console.log(<Button></Button>);
// export async function generateMetadata({params,searchParams}){
//   const data = await new Promise((res)=>{setTimeout(res("商品"),1000)})
//    return {
//     title:data
//    }
// }

const DynamicPage = dynamic(()=>import('./components/ProductList'))
const DynamicBtn = dynamic(()=>import('./components/Bottom'))
export default async function page() {
  // let users = await db.query();
  // console.log(users);
  return (
    <div>
      <DynamicPage />
      <DynamicBtn />
      <Spinner />
    </div>
  )
}
