import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div style={{display: 'grid', placeItems: 'center', height:'100vh'}}>
      <Head>
        <title>CMYK Printing Media</title>
        <meta name={'description'} content={'CMYK is a printing media company that has' +
          ' served many company, we stand among the best you can get'}/>
      </Head>
      <Image src={"/images/comingsoon.jpg"} alt={'coming-soon'} height={400} width={400} style={{maxWidth: '80vw'}} />
    </div>
  )
}

export default Home
