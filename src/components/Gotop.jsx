"use client"
import React, { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArrowUp } from 'react-feather'
const GTbox = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  background-color: #836FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
  &:hover {
    background-color: #999;
  }
`

export default function Gotop() {
  const [ showTop, setShowTop ] = useState(false)
  const gotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      setShowTop(scrollTop >= 800)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    showTop && (
      <GTbox onClick={gotop}>
        <ArrowUp />
      </GTbox>
    )
  )
}
