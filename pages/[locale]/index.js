import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

import Link from '../../Components/Link'

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer'])

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
