import Image from 'next/image';
import { H1 } from './style/styled';
import fs from 'fs'
export const metadata = {
  title: '小洁大王',
  description: '小洁大王牛逼',
}
let blurDataURL = fs.readFileSync('src/asset/imgurl.txt','utf-8')
 
function Home() {
  console.log(process.env);

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