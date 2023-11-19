import ArtPieces from "@/Components/ArtPieces/ArtPieces";
import useSWR from "swr";
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import { Header } from '../../components/Header'
export default function Favorites({ pieces, artPiecesInfo, onToggleFavorite }) {
  // const fetcher = (url) => fetch(url).then((response) => response.json());
  //   const { data, error, isLoading, mutate } = useSWR(
  //     "https://example-apis.vercel.app/api/art",
  //     fetcher
  //   );
  const { t } = useTranslation(['favorites', 'common', 'footer'])
  if (artPiecesInfo.length == 0) {

    return <h1>{t('nofav')}</h1>
  }
  console.log("pieces", pieces)
  let FavInfoSlugs = artPiecesInfo.filter((i) =>
    i.isFav
  ).map((i) => i.slug);
  console.log("favSlugs", FavInfoSlugs)
  console.log("first slug", pieces[0].slug);
  console.log("filter logic", FavInfoSlugs.includes(pieces[0].slug));
  let favPieces = pieces.filter((i) => { return FavInfoSlugs.includes(i.slug) })


  if (FavInfoSlugs.length == 0) {
    return <h1>{t('nofav')}</h1>;
  }
  // console.log(FavPieces)
  return (
    <>
      <Header heading={t('h1')} title={t('title')} />
      <ArtPieces pieces={favPieces} artPiecesInfo={artPiecesInfo} onToggleFavorite={onToggleFavorite} />;
    </>
  )
}

const getStaticProps = makeStaticProps(['favorites', 'common', 'footer'])
export { getStaticPaths, getStaticProps }