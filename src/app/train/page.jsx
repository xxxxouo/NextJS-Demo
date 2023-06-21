"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useDPR } from "./hooks/useWindowApi";

const DeadRender = dynamic(() => import("./components/DeadRender"));
const ScrollList = dynamic(() => import("./components/UnlimitedList"));

function page() {
  const dpr = useDPR();
  return (
    <div className=" mt-3">
      <DeadRender />
      <p>当前设备像素比为:{dpr}</p>
      <ScrollList />
    </div>
  );
}

export default page;
