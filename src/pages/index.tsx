import { Icon } from '@iconify/react';
import styles from '../../styles/home.module.css';
import SlideShow from '../@core/components/slideshow/SlideShow';

export default function Home() {
  return (
    <main className="main">
      <div className="row">
        <h1 className={styles.title}>
          Thư viện
        </h1>
        <Icon icon="ant-design:play-circle-filled" color="#033dfc" width={50} />
      </div>
      <SlideShow />
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
