import type { AppProps } from 'next/app';
// import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
import '../../styles/globals.css';
import UserLayout from '../@core/layout/UserLayout';
// const inter = Inter()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout>
    </main>
  );
}
