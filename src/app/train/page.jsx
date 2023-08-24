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

const routerList = [
  {
    path: "./train/pictureInpicture",
    label: "进入画中画页面",
  },
  {
    path: "./train/imageVideo",
    label: "进入视频文本化",
  }
]

function Page() {
  const dpr = useDpr();
  // console.log(Factory.title);  // 通过工厂函数获取title
  return (
    <div className=" mt-3">
      <DeadRender />
      <p>当前设备像素比为:{dpr}</p>
      <div className=" flex-wrap flex items-center gap-3">
        {
          routerList.map((item,index)=>{
            return (
              <Link className="p-2 rounded-md border border-solid border-red-400 inline-block" 
                href={item.path}
                key={index}
              >{item.label}</Link>
            )
          })
        }
      </div>
      <CatchCanvas />
      <ScrollList />
    </div>
  );
}

export default Page;
