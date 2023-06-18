"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { H1 } from '../style/styled';
import img from '@@/wechat.jpg'

export default function BlurData(props) {
  // const url = `https://ipfs.filebase.io/ipfs/QmTUykxcy9fhJmbrwUVMArMqnYQ56FYZjeaAi159p4ake5`
  return (
    <div className=' flex justify-center flex-col items-center'>
       <H1 className=' text-purple-200 text-5xl'>如对您有帮助,请支持下煮啵</H1>
        <Image src='/wechat.jpg' width={300} height={360} {...props} placeholder='blur' quality={100} alt="在线乞讨" />
    </div>
  )
}
