import Head from 'next/head'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Efficient from './components/Efficient'
import LongLasting from './components/LongLasting'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage | Ray_N Lighting</title>
        <meta name="description" content="Welcome to Ray_N lighting, the best manufacturer of high quality lighting components (this website is for demonstration only)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      <Efficient/>
      <LongLasting/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
