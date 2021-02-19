import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lake Bramlett</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <div>Lake Bramlett</div>
    </div>
  )
}
