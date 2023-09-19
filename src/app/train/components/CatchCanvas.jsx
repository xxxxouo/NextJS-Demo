import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/shadcnUI/ui/button";
import html2canvas from "html2canvas";

export default function CatchCanvas() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const componentRef = useRef(null);
  const divRef = useRef(null);

  const handleConvertToCanvas = () => {
    html2canvas(componentRef.current, {}).then((canvas) => {
      divRef.current.appendChild(canvas);
    });
  };

  useEffect(() => {
    if (!isFlashing) {
      setIsFlashing(true);
      const intervalId = setInterval(() => {
        setCurrentNumber(Math.floor(Math.random() * 100)); // 生成随机数字
      }, 300);

      // return () => clearInterval(intervalId);
    }
  }, [isFlashing]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div ref={componentRef} className="">
        <span className=" text-lg">洁神牛逼*{currentNumber}</span>
      </div>
      <Button
        variant="outline"
        className="  bg-destructive  text-destructive-foreground  dark:bg-white"
        onClickCapture={handleConvertToCanvas}
      >
        将元素转换为canvas👋
      </Button>
      <div className="flex flex-wrap" ref={divRef}></div>
    </div>
  );
}
