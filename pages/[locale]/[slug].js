/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import ArtPieceDetails from "@/Components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Header } from '../../components/Header'

export default function ArtPiecesDetailsPage({
  onToggleFavorite,
  artPiecesInfo,
  pieces
}) {
  const { t } = useTranslation(['artpiecedetails', 'common', 'footer'])
  // const { data, error, isLoading, mutate } = useSWR(
  //   "https://example-apis.vercel.app/api/art"
  // );

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  const router = useRouter();
  const clickedImageSlug = router.query.slug;
  console.log(clickedImageSlug)
  const { imageSource, name, artist, year, genre, slug, colors } = pieces.find(
    (item) => item.slug === clickedImageSlug
  );
  console.log(imageSource);

  return (
    <ArtPieceDetails
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
      slug={slug}
      colors={colors}
    />
  );
}

export const getStaticPaths = async () => {
  const locales = ['en', 'ar', 'de']
  const res = await fetch("https://example-apis.vercel.app/api/art");
  const pieces = await res.json();

  const slugs = pieces.map((piece) => piece.slug);
  const paths = slugs
    .map((slug) =>
      locales.map((locale) => ({
        params: { slug },
        locale, //locale should not be inside `params`
      }))
    )
    .flat(); // to avoid nested arrays
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
};
// export const getStaticProps = async ctx => {

//   // some data fetched from anywhere...
//   const data = await fetch("https://example-apis.vercel.app/api/art");
//   const pieces = await data.json()

//   return {
//     props: {
//       ...(await getI18nProps(ctx, [
//         'artpiecedetails',
//         'common',
//         'footer',
//       ])),
//       pieces,
//     },
//   }
// }

const getStaticProps = makeStaticProps(['artpieces', 'common', 'footer'])
