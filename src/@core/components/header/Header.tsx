import React from 'react';
import { Icon } from '@iconify/react';
import styles from '../../styles/header.module.scss';
const HeaderSearch = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bgBlur}></div>
            <div className={styles.headerLeft}>
                <div className={styles.direct}>
                    <Icon icon="ant-design:arrow-left-outlined" color="#ccc" width={25} />
                    <Icon icon="ant-design:arrow-right-outlined" color="#ccc" width={25} />
                </div>
                <div className={styles.searchBox}>
                    <div className={styles.iconSearch}>
                        <Icon icon="akar-icons:search" color="#ccc" width={20} />
                    </div>
                    <input placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát ...' className={styles.inputSearch} />
                </div>
            </div>
        </div>
    );
};
export default HeaderSearch;