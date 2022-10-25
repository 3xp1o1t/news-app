import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {


  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos articulos.</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <Image
                src={article.urlToImage}
                alt={`Image for the article ${article.title}`}
                width={200} height={200}
                layout='responsive'
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

// Fetching desde el servidor, recupera los datos cada vez que se renderiza el componente.
// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2022-09-25&sortBy=publishedAt&apiKey=b1ac9c327907423189801bb4f371a519"
//   )
//   const { articles } = await response.json()
  
//   return {
//     props: {
//       articles
//     }
//   }
// }

// Trae los datos 1 vez al cargar el sitio o cada vez que se recarge la pagina.
export async function getStaticProps() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b1ac9c327907423189801bb4f371a519"
  );
  const { articles } = await response.json()
  
  return {
    props: {
      articles
    }
  }
}