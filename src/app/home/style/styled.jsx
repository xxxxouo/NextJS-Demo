"use client"
import styled from "styled-components";

export const H1 = styled.h1`
  background:linear-gradient( to right ,red, green) no-repeat;
  background-position:right bottom -2px;
  background-size:0 4px;
  transition: background-size 1300ms ;
  display:flex;
  :hover{
    background-position-x:left;
    background-size:100% 4px;
  }
`
export const P = styled.p`
  animation:Animation 1s infinite;
  @keyframes Animation {
    0% {
      opacity:0.5;
      transform: scale(0.7);
    }
    50% {
      opacity:0.7;
      transform: scale(1.2);
    }
    100% {
      opacity:0.5;
      transform: scale(0.7);
    }
  }
  &:hover{
    animation-play-state:paused;
  }
`
