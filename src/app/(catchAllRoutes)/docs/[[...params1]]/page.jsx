import React from 'react'

function page({params:{params1=[]}}) {
  if(params1.length == 2){
    return (
      <h1>
        当前路由是{params1[0]} 下的 {params1[1]}
      </h1>
    )
  }else if (params1.length == 1){
    return (
    <h1>
      当前路由 是 {params1[0]}
    </h1>)
  }
  return (
    <div>
      所有路由模块
    </div>
  )
}

export default page