import Spotlight from "@/Components/Spotlight/Spotlight";
import { Header } from '../../components/Header'
import pickRandomItem from "@/utils/random";
import { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next'
import {
  getStaticPaths /*, makeStaticProps*/,
  getI18nProps,
} from '../../lib/getStatic'
export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [randomArt, setRandomArt] = useState({});

  useEffect(() => {
    setRandomArt(pickRandomItem(pieces));
  }, [pieces]);

  const { t } = useTranslation(['spotlight', 'common'])

  return (
    <main>
      <Header heading={t('h1')} title={t('title')} />
      <Spotlight
        image={randomArt.imageSource}
        artist={randomArt.artist}
        slug={randomArt.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}

export { getStaticPaths }
export const getStaticProps = async ctx => {

  // some data fetched from anywhere...
  const data = await fetch("https://example-apis.vercel.app/api/art");
  const res = await data.json()
  const randArt = await pickRandomItem(res)
  const someOtherData = randArt
  return {
    props: {
      ...(await getI18nProps(ctx, [
        'spotlight',
        'common',
        'footer',
      ])),
      someOtherData,
    },
  }
}