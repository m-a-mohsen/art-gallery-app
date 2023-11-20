import React from "react";
import Navigation from "../Navigation";
import LocaleSwitcher from "../../Components/locale-switcher";
import Link from "next/link";
import useTextDirection from '../useTextDirection';
import { useTranslations } from 'next-intl';

export default function Layout({ children, locale }) {
  const direction = useTextDirection(locale);
  const t = useTranslations('PageLayout');

  return (
    <>
      <html lang={locale} dir={direction}>
        <header>
          <h1>{t('artGallery')}</h1>
          <LocaleSwitcher />
          <Link href={'/'} >home</Link>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>
          <p>{t('artGallery')}</p>
        </footer>
      </html>

    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}