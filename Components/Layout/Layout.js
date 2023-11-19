// import React from "react";
import Navigation from "../Navigation/Navigation";
import { useTranslation } from 'next-i18next'

import {
  getStaticPaths /*, makeStaticProps*/,
  getI18nProps,
} from '../../lib/getStatic'

export default function Layout({ children }) {
  const { t } = useTranslation(['common', 'footer'])
  return (
    <div>
      <header>
        <h1>{t('gallery')}</h1>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <p>Gallery</p>
      </footer>
    </div>
  );
}

// const getStaticProps = makeStaticProps(['common', 'footer'])
// export { getStaticPaths, getStaticProps }


export { getStaticPaths }
export const getStaticProps = async ctx => {
  // some data fetched from anywhere...
  const someOtherData = 'hello world'
  return {
    props: {
      ...(await getI18nProps(ctx, [
        'second-page',
        'common',
        'footer',
      ])),
      someOtherData,
    },
  }
}

