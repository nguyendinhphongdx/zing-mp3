import React, { FC, ReactNode, useState } from "react";
import Image from 'next/image';

import styles from '../styles/layout.module.css';
import SidebarLeft from "../components/sidebar/sidebarLeft";
import FooterPlayer from "../components/footer/FooterPlayer";
import HeaderSearch from "../components/header/Header";

interface Props {
    children: ReactNode
}

const UserLayout: FC<Props> = (props: Props) => {
    const [state, setState] = useState(false);
    return (
        <div className={styles.container}>
            <div style={{ display: 'flex', flex: 1, overflow: 'auto' }}>
                <div className={[styles.sidebar, styles.sidebarLeft].join(" ")}>
                    <SidebarLeft />
                </div>
                <div style={{ flex: 'auto', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <HeaderSearch />
                    <main style={{ height: '-webkit-fill-available' }}>
                        {props.children}

                    </main>
                </div>
                <div className={[styles.sidebar, styles.sideRight].join(' ')}>
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