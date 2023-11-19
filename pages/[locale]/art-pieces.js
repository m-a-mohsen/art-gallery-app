import ArtPieces from "@/Components/ArtPieces/ArtPieces";
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Header } from '../../components/Header'

export default function ArtPiecesPage({
  onToggleFavorite,
  artPiecesInfo,
  pieces,
}) {
  const { t } = useTranslation(['artpieces', 'common', 'footer'])

  return (
    <main>
      <Header heading={t('h1')} title={t('title')} />
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </main>
  );
}

const getStaticProps = makeStaticProps(['artpieces', 'common', 'footer'])
export { getStaticPaths, getStaticProps }