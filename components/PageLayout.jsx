import Head from "next/head";
import styles from "../styles/PageLayout.module.css";

export default function PageLayout({ children, title = "News App" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.head}>News API 📰</header>
      <main>{children}</main>
    </>
  );
}
