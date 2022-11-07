import React, { FC, ReactNode } from "react";
import Image from 'next/image';

import styles from '../styles/layout.module.css';
import SidebarLeft from "../components/sidebar/sidebarLeft";

interface Props {
    children: ReactNode
}

const UserLayout: FC<Props> = (props: Props) => {
    return (
        <div className={styles.container}>
            <div style={{ display: 'flex', flex: 1 }}>
                <div className={[styles.sidebar, styles.sidebarLeft].join(" ")}>
                    <SidebarLeft />
                </div>
                <div style={{ flex: 'auto' }}>
                    {props.children}
                </div>
                <div className={styles.sidebar}>
                    sidebar-right
                </div>
            </div>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default UserLayout;