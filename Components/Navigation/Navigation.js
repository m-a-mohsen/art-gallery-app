// import Link from "next/link";
import Link from '../Link'
import { useTranslation } from 'next-i18next'
import {
  getStaticPaths /*, makeStaticProps*/,
  getI18nProps,
} from '../../lib/getStatic'

export default function Navigation() {
  const { t } = useTranslation(['common', 'footer'])
  return (
    <ul>
      <li>
        <Link href="/art-pieces">{t('pieces')}</Link>
      </li>
      <li>
        <Link href="/spotlight">{t('spotlight')}</Link>
      </li>
      <li>
        <Link href="/favorites">{t('favorites')}</Link>
      </li>
    </ul>
  );
}
