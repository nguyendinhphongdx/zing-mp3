import React, { FC, ReactNode } from "react";
import Image from 'next/image';

import styles from '../styles/layout.module.css';
import SidebarLeft from "../components/sidebar/sidebarLeft";
import FooterPlayer from "../components/footer/FooterPlayer";

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
                <FooterPlayer />
            </footer>
        </div>
    );
};

export default UserLayout;