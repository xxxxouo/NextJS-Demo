// "use client"
// import { useEffect,useState,createContext } from 'react'

// export const productIdContext = createContext(null)

export async function generateMetadata({ params, searchParams }) {
  const { productId } = params;
  const data = await new Promise((res) => setTimeout(res(productId), 1000));
  return {
    title: `商品${data}的详情`,
  };
}

export default function Layout({ children, params }) {
  // const[ state, setState ] = useState(null)
  // const { productId } = params
  // useEffect(()=>{
  //   setState(productId)
  // },[productId])
  return (
    // <productIdContext.Provider value={state}>
    <div className="">{children}</div>
    // </productIdContext.Provider>
  );
}
