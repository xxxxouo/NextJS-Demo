"use client"
import styled from "styled-components";

export const H1 = styled.h1`
  background:linear-gradient( to right ,red, green) no-repeat;
  background-position:right bottom -1px;
  background-size:0 4px;
  transition: background-size 1300ms ;
  :hover{
    background-position-x:left;
    background-size:100% 4px;
  }
`