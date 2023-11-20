import Link from 'next/link'
import { useRouter } from 'next/router'
import LocaleSwitcher from '../Components/locale-switcher'

import { useTranslations } from 'next-intl';

export default function IndexPage() {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router
  const t = useTranslations('Index');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <LocaleSwitcher />

      <Link href="/gsp">To getStaticProps page</Link>
      <br />

      <Link href="/gsp/first">To dynamic getStaticProps page</Link>
      <br />

      <Link href="/gssp">To getServerSideProps page</Link>
      <br />

    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}