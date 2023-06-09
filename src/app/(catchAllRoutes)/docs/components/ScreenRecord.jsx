import React,{ useRef } from 'react'

function ScreenRecord() {
  const btnRef = useRef(null)
  const videoRef = useRef(null)

  let screenStream = null
  let peerConntction = null

  const handleShare  =  ()=>{
    if(!peerConntction){
      // 创建一个 RTCPeerConnection 对象
      peerConntction = new RTCPeerConnection()
      navigator.mediaDevices.getDisplayMedia({ video:true, audio: false })
      .then(captureStream =>{
          screenStream  =  captureStream
        // console.log(screenStream);
        // 监听共享屏幕停止事件
        screenStream.getVideoTracks()[0].onended = ()=>{
          //处理共享停止的逻辑
          console.log('stop');
        }
        // 获取共享屏幕的视频轨道
        const screenTrack = screenStream.getVideoTracks()[0]

        // 添加视频轨道到RTCPeerConnection
        peerConntction.addTrack(screenTrack,screenStream)

        // 将视频流附加到video元素上显示屏幕共享
        videoRef.current.srcObject = screenStream
        btnRef.current.textContent = "停止屏幕共享"

        // 监听ICE候选事件
        peerConntction.onicecandidate = (event)=>{
          if(event.cancelable){
            // 将候选信息发送给其他对等端
            sendIceCandidate(event.candidate)
          }
        }
        // 创建一个offer 并设置本地描述 
        return peerConntction.createOffer()
      })
      .then((offer)=>{
        // 设置本地描述
        return peerConntction.setLocalDescription(offer)
      })
      .then(()=>{
        sendLocalDescription(peerConntction.localDescription)
      })
      .catch((error)=>{
        console.error(error)
      })
    } else{

    }

  }

  const sendLocalDescription = (e)=>{
    console.log(e);
  }
  return (
    <>
      <div>
        <button type='button' ref={btnRef} onClick={handleShare}>开启共享屏幕</button>
      </div>
      <video ref={videoRef} autoPlay></video>
    </>
  )
}

export default ScreenRecord