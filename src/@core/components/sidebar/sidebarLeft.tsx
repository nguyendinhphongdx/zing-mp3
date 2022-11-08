import React, { FC } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import styles from '../../styles/sidebar.module.scss';
interface Props {

}

const routes = [
    {
        title: 'Cá Nhân',
        icon: '/images/folder-music.png',
        active: true,
        path: '/',
    },
    {
        title: 'Khám phá',
        icon: '/images/disc.png',
        path: '/about',
    },
    {
        title: '#zingchart',
        icon: '/images/chart.png',
        path: '/about',
    },
    {
        title: 'Radio',
        isNew: true,
        icon: '/images/circle.png',
        path: '/about',
    },
    {
        title: 'Theo dõi',
        icon: '/images/newspaper.png',
        path: '/about',
    }
]
const features = [
    {
        title: 'Nhạc Mới',
        icon: '/images/node.png',
    },
    {
        title: 'Thể Loại',
        icon: '/images/node.png',
    },
    {
        title: 'Top 100',
        icon: '/images/node.png',
    },
    {
        title: 'MV',
        icon: '/images/node.png',
    },
];
const cards = [
    {
        text: 'Đăng nhập để khám phá playlist dành riêng cho bạn',
        buttonText: 'ĐĂNG NHẬP',
    },
    {
        text: 'Nghe nhạc không quảng cáo cùng kho nhạc VIP',
        buttonText: 'NÂNG CẤP VIP',
        isUpgrade: true,
    }
];
const SidebarLeft: FC<Props> = (props: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className={styles.logo}>
                <Image src={'/images/logo-dark.svg'} alt="logo-dark.svg" width={120} height={40} />
            </div>
            <div className="container">
                {
                    routes.map((i, index) => <NavBarItem key={index} {...i} />)
                }
            </div>
            <div className={styles.divider} />
            <div style={{ position: 'relative', overflow: 'auto', flex: 1 }}>
                <div className="" style={{ position: 'absolute', width: '100%' }}>
                    {
                        features.map((i, index) => <NavBarItem key={index} {...i} />)
                    }
                    <div className={styles.cardContainer}>
                        {cards.map((card, index) => <CardButton key={index} isUpgrade={card.isUpgrade} text={card.text} buttonText={card.buttonText} />)}
                    </div>
                    {
                        features.map((i, index) => <NavBarItem key={index} {...i} />)
                    }
                </div>
            </div>
            <div className={styles.divider} style={{ marginBottom: 0 }} />
            <div className={styles.createList}>
                <Icon icon="akar-icons:plus" scale={2} />
                <span>Tạo playlist mới</span>
            </div>
        </div>
    )
}
export default SidebarLeft;

interface PropsItem {
    title: string;
    icon?: string;
    isNew?: boolean;
    active?: boolean;
    path?: string;
}
const NavBarItem: FC<PropsItem> = (props: PropsItem) => {
    return (
        <Link href={props.path || '/'}>
            <div className={[styles.row, props.active ? styles.active : ''].join(' ')}>
                <Image src={props.icon || '/folder-music.png'} width={30} height={30} alt="" />
                <span className={styles.navbarTitle}>
                    {props.title}
                    {props.isNew && <span className={styles.hightLight}>live</span>}
                </span>
            </div>
        </Link>
    );
}
NavBarItem.defaultProps = {
    path: '/',
}

interface PropsCard {
    bgColor?: string;
    text: string;
    buttonText?: string;
    isUpgrade?: boolean;
}
const CardButton: FC<PropsCard> = (props: PropsCard) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{props.text}</div>
            <div className={[styles.button, props.isUpgrade ? styles.upgrade : ''].join(' ')}>{props.buttonText}</div>
        </div>
    );
}