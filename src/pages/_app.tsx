import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../../styles/globals.css';
import UserLayout from '../@core/layout/UserLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout>
    </main>
  );
}
