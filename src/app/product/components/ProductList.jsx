import React from 'react'
import Link from 'next/link';

export default function ProductList() {
  
  return (
    <ul className=' flex flex-col gap-3'>
      <li>
        <button className=' bg-blue-300 p-3'><Link href='./product/1'>点击进入商品1</Link></button>
      </li>
      <li>
        <button className=' bg-blue-300 p-3'><Link href='./product/2'>点击进入商品2</Link></button>
      </li>
      <li>
      <button className=' bg-blue-300 p-3'><Link href='./product/3'>点击进入商品3</Link></button>
      </li>
    </ul>
  )
}
