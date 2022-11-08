import Image from 'next/image';
import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import Lottie from 'react-lottie';
import animationData from '../../../../public/lottie/play-pause.json';

import { SongItem } from '../../../types';
import styles from '../../styles/footer.module.scss';

interface Props {

};

const songSelected: SongItem = {
    id: 1,
    name: 'Xem anh có ngốc không',
    description: 'Dừng lại và quên thôi',
    duration: '04:30',
    image: '/images/xem-anh-co-ngoc-khong.webp',
    singer: 'Khang Việt',
    source: '/mp3/xem-anh-co-ngoc-khong.mp3',
    isFavorite: true,
}

const FooterPlayer: FC<Props> = (props: Props) => {
    return (
        <div className={styles.container}>
            <SongContainer song={songSelected} />
            <div className={styles.songPlayer}>
                song player
            </div>
            <ControlMedia song={songSelected} />
        </div>
    );
};
export default FooterPlayer;

interface CardSongProps {
    song: SongItem;
}

const SongContainer: FC<CardSongProps> = (props: CardSongProps) => {
    const { song } = props;
    return (
        <div className={styles.songContainer}>
            <div className={styles.image}>
                <Image src={song.image} alt={song.image} width={60} height={60} />
            </div>
            <div className={styles.mation}>
                <p className={styles.name}>{props.song.name}</p>
                <span className={styles.singer}>{props.song.singer}</span>
            </div>
            <div className={styles.actions}>
                <Icon icon="ant-design:heart-filled" />
                <Icon icon="bi:three-dots" />
            </div>
        </div>
    );
};
interface ControlMediaProps {
    song: SongItem;
}

const ControlMedia: FC<ControlMediaProps> = (props: ControlMediaProps) => {
    const { song } = props;
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className={styles.songContainer}>
            <div className={styles.image}>
                <Image src={song.image} alt={song.image} width={60} height={60} />
            </div>
            <div className={styles.mation}>
                <p className={styles.name}>{props.song.name}</p>
                <span className={styles.singer}>{props.song.singer}</span>
            </div>
            <div className={styles.actions}>
                <Icon icon="ant-design:heart-filled" />
                <Icon icon="bi:three-dots" />
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </div>
    );
};
