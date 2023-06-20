import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import styles from '../../styles/header.module.scss';
import Image from 'next/image';
const IconCircles: PropsCircle[] = [
    {
        image: 'icon-park:theme',
    },
    {
        image: 'icon-park-outline:vip-one',
    },
    {
        image: 'ant-design:setting-outlined',
    },
    {
        image: 'ant-design:upload-outlined',
    },
    {
        image: 'carbon:user-avatar',
    },
];

const HeaderSearch = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bgBlur}></div>
            <div className={styles.headerLeft}>
                <div className={styles.direct}>
                    <Icon icon="ant-design:arrow-left-outlined" color="#ccc" width={20} />
                    <Icon icon="ant-design:arrow-right-outlined" color="#ccc" width={20} />
                </div>
                <div className={styles.searchBox}>
                    <div className={styles.iconSearch}>
                        <Icon icon="akar-icons:search" color="#ccc" width={18} />
                    </div>
                    <input placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát ...' className={styles.inputSearch} />
                </div>
            </div>
            <div className={styles.headerRight}>
                {
                    IconCircles.map((icon, index) => <CircleImageButton key={index} {...icon} />)
                }
            </div>
        </div>
    );
};
export default HeaderSearch;

interface PropsCircle {
    image: string;
    width?: number;
    height?: number;
}

const CircleImageButton: FC<PropsCircle> = (props: PropsCircle) => {
    const { width = 25, height = 25, image } = props;
    return (
        <div className={styles.iconCircle}>
            <Icon icon={image} color="#ccc" width={width} height={height} />
            {/* <Image src={image} width={width} height={height} alt={image} /> */}
        </div>
    );
}