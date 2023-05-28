'use client'; //使用客户端组件用于页面交互,路由跳转, 生命钩子和state
import {useRouter,usePathname,useSearchParams} from 'next/navigation';
import {useContext} from 'react';
import { productIdContext } from './layout';
import Link from 'next/link';

export const getServerSideProps = async (content) => {
  console.log(1111);
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
};

function page({params,repo}) {
  console.log(repo,'repo');
  const { productId} = params
  const router = useRouter()
  const pathName = usePathname()
  // const value =  useContext(productIdContext)
  return (
    <div>
      <h1>动态路由--- 对应的params:{ productId }</h1>
      <h1>当前页面路径为:{pathName}</h1>
      <Link href={`./product/${productId}/review/${productId}`}>跳转至该商品详情</Link>
    </div>
  )
}

export default page