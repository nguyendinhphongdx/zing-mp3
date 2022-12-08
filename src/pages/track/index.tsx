import Head from 'next/head';
import styles from '../../../styles/home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
        </div>
    )
}
