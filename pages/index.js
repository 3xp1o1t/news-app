import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App - Home</title>
      </Head>

      <h1 className={styles.title}>Aprendiendo Next.js desde 0</h1>
    </div>
  )
}
