import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "../../components/Link";
// import Link from "next/link";
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={312} height={312} />
      </Link>
      <div>{title}</div>
      <div>{artist}</div>

      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      ></FavoriteButton>
    </>
  );
}


export { getStaticPaths }
export const getStaticProps = async ctx => {
  // some data fetched from anywhere...
  const someOtherData = slug
  return {
    props: {
      ...(await getI18nProps(ctx, [
        'common',
        'footer',
      ])),
      someOtherData,
    },
  }
}