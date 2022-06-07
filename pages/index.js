import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LatestAndTrending from '../src/components/LatestAndTrending/LatestAndTrending'
 
export default function Home() {
  return (  
   <div>
     <h1>Welcome to <strong className="mainTitleClass">Hotstar</strong></h1>
     <LatestAndTrending />
   </div>
  )
}
