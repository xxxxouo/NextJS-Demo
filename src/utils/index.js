import { times } from "lodash"
export const randomImg = async(size)=>{
  const url =  `https://picsum.photos/${size}`
  const response = await fetch(url)
  return response?.url
} 

export const loadImg = async(size = 300) =>{
  const url =  `https://picsum.photos/${size}`
  let arr = times(10)
  let pormise = arr.map(async() =>{
    const response =  await fetch(url)
    return response?.url
  })
  const res = await Promise.all(pormise)
  return res
}