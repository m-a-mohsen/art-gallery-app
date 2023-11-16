/* eslint-disable react-hooks/rules-of-hooks */
import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/Components/Layout";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      // if the info is already in the state, toggle the isFav property
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFav: !info.isFav } : info
        );
      }

      // if the isFav is not in the state, add it with isFav set to true
      return [...artPiecesInfo, { slug, isFav: true }];
    });
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(artPiecesInfo);

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component
            {...pageProps}
            pieces={data}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
