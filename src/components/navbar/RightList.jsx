import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DivBox = styled.div`
  will-change: animation;
  animation: slideDown 0.3s linear forwards;
  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

function RightList({ phoneRightList, isshow, setIsshow }) {
  const pathname = usePathname();
  if (!isshow) return null;
  return (
    <DivBox className=" bg-cyan-50 text-black px-2 py-4 fixed top-12 right-0 flex flex-col items-center justify-center gap-5">
      {phoneRightList.map((route) => (
        <Link
          className={
            pathname.startsWith(route.href)
              ? `text-purple-500 font-bold leading-3rem px-6`
              : "leading-3rem px-6"
          }
          key={route.href}
          href={route.href}
          onClick={() => setIsshow(false)}
        >
          {route.label}
        </Link>
      ))}
    </DivBox>
  );
}

export default RightList;
