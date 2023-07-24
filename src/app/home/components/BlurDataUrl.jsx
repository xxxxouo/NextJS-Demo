"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { H1, P } from "../style/styled";
import img from "@@/wechat.jpg";

export default function BlurData({ blurDataURL, children }) {
  // const url = `https://ipfs.filebase.io/ipfs/QmTUykxcy9fhJmbrwUVMArMqnYQ56FYZjeaAi159p4ake5`
  const [show, setShow] = useState(false);
  
  return (
    <div className=" flex justify-center flex-col items-center">
      <H1 className=" text-purple-200 lg:text-5xl text-2xl select-none">
        如对您有帮助,请
        <P
          className=" cursor-pointer text-red-400 transform "
          onClick={() => setShow((pre) => !pre)}
        >
          支持
        </P>{" "}
        下煮啵
      </H1>
      {children}
      {show && (
        <Image
          src="/wechat.jpg"
          width={300}
          height={360}
          blurDataURL={blurDataURL}
          placeholder="blur"
          quality={100}
          alt="在线乞讨"
        />
      )}
    </div>
  );
}
