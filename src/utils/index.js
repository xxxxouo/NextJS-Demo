export const randomImg = async(size)=>{
  const url =  `https://picsum.photos/${size}`
  const response = await fetch(url)
  return response?.url
} 

