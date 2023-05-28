import React from 'react'
import Buttom from './components/Bottom'
export async function generateMetadata({parmas,searchParams}){
  const data = await new Promise((res)=>{setTimeout(res("产品"),1000)})
   return {
    title:data
   }
}


export default function page() {
  return (
    <div>
      <ul>
        <li>产品 1 </li>
        <li>产品 2 </li>
        <li>产品 3 </li>
      </ul>
      <Buttom />
    </div>
  )
}
