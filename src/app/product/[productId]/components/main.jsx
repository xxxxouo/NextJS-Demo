'use client'; //使用客户端组件用于页面交互,路由跳转, 生命钩子和state
import {useRouter,usePathname,useSearchParams} from 'next/navigation';
import React from 'react'
import Link from 'next/link';

export default function main({params}) {
  const { productId} = params
  const router = useRouter()
  const pathName = usePathname()
  console.log(productId,pathName);

  return (
    <div>
      <div>
      <h1>动态路由--- 对应的params:{ productId }</h1>
      <h1>当前页面路径为:{pathName}</h1>
      <div className=' mt-2 text-center flex flex-col items-center'>
        <Link className='bg-blue-300 px-3 py-2  w-52' href={`./product/${productId}/review/${productId}`}>跳转至该商品详情</Link>
        <div className='bg-blue-300 px-3 py-2 cursor-pointer mt-4 w-52' onClick={()=>{
          router.replace('/home')
        }}>返回首页捐款</div>
      </div>
    </div>
    </div>
  )
}
