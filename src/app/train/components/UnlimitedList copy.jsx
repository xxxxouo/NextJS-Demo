"use client";
import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { randomImg } from "@/utils";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  & > img {
    width: 300px;
    margin: 10px 0;
    border: 1px solid #000;
    display: inline-block;
    padding: 10px;
    opacity: 0;
    border-radius: 10px;
    transition: 150ms;
    transform: translateX(-50px);
  }
  & > img.show {
    opacity: 1;
    transform: translateX(0px);
  }
`;

function UnlimitedList() {
  useEffect(() => {
    const root = document.getElementById("root");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((card) => {
          card.target.classList.toggle("show", card.isIntersecting);
          if (card.isIntersecting) observer.unobserve(card.target);
        });
      },
      {
        threshold: 0.5,
      }
    );

    const lastObserver = new IntersectionObserver(([entries]) => {
      if (!entries.isIntersecting) return;
      loadMore();
      lastObserver.unobserve(entries.target);
    });
    // cards.forEach(card => observer.observe(card))

    const loadMore = () => {
      console.log("loadmore...");
      for (let i = 0; i < 10; i++) {
        const Img = document.createElement("img");
        randomImg(300)
          .then((res) => {
            Img.src = res;
            root.appendChild(Img);
            observer.observe(Img);
            if (i == 9) {
              lastObserver.observe(document.querySelector("img:last-child"));
            }
          })
          .catch();
      }
    };
    // 初始加载图
    for (let i = 0; i < 10; i++) {
      const Img = document.createElement("img");
      randomImg(300)
        .then((res) => {
          Img.src = res;
          root.appendChild(Img);
          observer.observe(Img);
          if (i == 9) {
            lastObserver.observe(document.querySelector("img:last-child"));
          }
        })
        .catch();
    }
  }, []);

  return (
    <div className=" w-full">
      <hr />
      <div className=" w-full lg:w-1/3 lg:ml-2">
        <Ul id="root" className=" w-full"></Ul>
      </div>
    </div>
  );
}

export default React.memo(UnlimitedList);
