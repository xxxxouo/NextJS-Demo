"use client";
import React,{ useEffect, useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDpr } from "./hooks/useWindowApi";
import Factory from "@/utils";
import { flushSync } from "react-dom";
import Link from "next/link"; 

const DeadRender = dynamic(() => import("./components/DeadRender"));
const ScrollList = dynamic(() => import("./components/UnlimitedList"));
const CatchCanvas = dynamic(() => import("./components/CatchCanvas"));

function Page() {
  const dpr = useDpr();
  // console.log(Factory.title);  // 通过工厂函数获取title
  return (
    <div className=" mt-3">
      <DeadRender />
      <p>当前设备像素比为:{dpr}</p>
      <Link className="p-2 rounded-md border border-solid border-red-400 inline-block" 
         href={'./train/pictureInpicture'}
      >进入画中画页面</Link>
      <CatchCanvas />
      <ScrollList />
    </div>
  );
}

export default Page;
