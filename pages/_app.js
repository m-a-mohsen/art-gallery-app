import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/Components/Layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} pieces={data} />
        </Layout>
      </SWRConfig>
    </>
  );
}
