import Image from 'next/image';
import { H1 } from './style/styled';
import fs from 'fs'
export const metadata = {
  title: '小洁大王',
  description: '小洁大王牛逼',
}
let blurDataURL = fs.readFileSync('src/asset/imgurl.txt','utf-8')
 
function Home() {
  console.log("%c欲买桂花同载酒,终不似少年游 \n金鳞岂是池中物,一遇风云便化龙","color:red;font-size:28px");
  console.log(`%c访问另一个域名:${process.env.APP_ANOTHERURL}`,"");
  return (
    <div className=' flex  flex-col items-center gap-2'>
      <div>Home</div>
      <div>当前环境:{process.env.APP_ENV} -- { process.env.APP_TEST }</div>
      <H1 className=' text-purple-200 text-5xl'>如对您有帮助,请支持下煮啵</H1>
      <Image src='/wechat.jpg' width={300} height={360}  blurDataURL={blurDataURL} placeholder='blur' quality={100} alt="在线乞讨" />
    </div>
  )
}

export default Home