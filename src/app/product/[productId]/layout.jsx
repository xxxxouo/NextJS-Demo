// "use client"
// import { useEffect,useState,createContext } from 'react'

// export const productIdContext = createContext(null)

export default ({children,params}) =>{
  // const[ state, setState ] = useState(null)
  // const { productId } = params
  // useEffect(()=>{
  //   setState(productId)
  // },[productId])
  return (
    // <productIdContext.Provider value={state}>
      <div className=" bg-pink-400">
        {children}
      </div>
    // </productIdContext.Provider>
  )
}