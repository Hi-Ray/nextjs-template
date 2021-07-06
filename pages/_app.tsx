import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import 'css-reset-and-normalize/css/button-reset.min.css';
import 'css-reset-and-normalize/css/link-reset.min.css';
import 'css-reset-and-normalize/css/reset-and-normalize.min.css';

import '@Styles/globals.sass';

const Site = ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default Site;
