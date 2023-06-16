export default function Template ({children}){
  console.log("%c欲买桂花同载酒,终不似少年游 \n金鳞岂是池中物,一遇风云便化龙","color:red;font-size:28px");
  console.log(`%c访问另一个域名:${process.env.APP_ANOTHERURL}`,"");
  return (
    <div className="w-full">
       <p className=" text-gray-400 border-b border-red-400 border-solid text-center"> 我是根路由的 template </p>
      {children}
    </div>
  )
}