import React, { FC } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/sidebar.module.css';
interface Props {

}

const routes = [
    {
        title: 'Cá Nhân',
        icon: '/images/folder-music.png',
        active: true,
    },
    {
        title: 'Khám phá',
        icon: '/images/disc.png',
    },
    {
        title: '#zingchart',
        icon: '/images/chart.png',
    },
    {
        title: 'Radio',
        isNew: true,
        icon: '/images/circle.png',
    },
    {
        title: 'Theo dõi',
        icon: '/images/newspaper.png',
    }
]
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
            <div style={{ position: 'relative', overflow: 'scroll', flex: 1}}>
                <div className="" style={{ position: 'absolute', width: '100 %' }}>
                    {
                        routes.map((i, index) => <NavBarItem key={index} {...i} />)
                    }
                    {
                        routes.map((i, index) => <NavBarItem key={index} {...i} />)
                    }
                    {
                        routes.map((i, index) => <NavBarItem key={index} {...i} />)
                    }
                    {
                        routes.map((i, index) => <NavBarItem key={index} {...i} />)
                    }
                </div>
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
}
const NavBarItem: FC<PropsItem> = (props: PropsItem) => {
    return <div className={[styles.row, props.active ? styles.active : ''].join(' ')}>
        <Image src={props.icon || '/images/folder-music.png'} width={30} height={30} alt="" />
        <span className={styles.navbarTitle}>
            {props.title}
            {props.isNew && <span className={styles.hightLight}>live</span>}
        </span>
    </div>
}