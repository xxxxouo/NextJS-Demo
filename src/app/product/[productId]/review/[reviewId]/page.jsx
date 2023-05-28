"use client"
import React,{ useEffect, useTransition,useState } from 'react'

function page({params}) {
  const { reviewId, productId } = params
  return (
    <div>
      <h2>ReviewId:{ reviewId } ----  productId: { productId }</h2> 
      <progress value={50}  max={100} className=' mt-4' />  
    </div>
  )
}

export default page