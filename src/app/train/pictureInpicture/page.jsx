"use client"
import React, { useEffect, useRef } from 'react'

export default function Page() {
  const videoRef= useRef(null)
  const onNext = ()=>{
    if(videoRef.current){
      videoRef.current.requestPictureInPicture({
        width: 480,
        height: 270,
      })
    }
  }
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <div id="playerContainer">
        <div id="player">
          <video ref={videoRef} src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" id='video'></video>
        </div>
      </div>
      <button className='p-3 border-solid border border-blue-400 rounded-lg' onClick={onNext}>打开画中画窗口!</button>
    </div>
  )
}
