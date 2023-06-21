import React, { useState } from "react";
import { notFound, useRouter } from "next/navigation";

export default function Bottom() {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <div className="flex items-center">
      <input
        className=" border border-solid border-b-gray-300"
        type="number"
        placeholder="请输入商品Id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className=" bg-red-300 text-white"
        onClick={() => {
          if (!value) return;
          router.push(`./product/${value}/review/${value}`);
        }}
      >
        去详情
      </button>
    </div>
  );
}
