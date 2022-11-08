import Image from 'next/image';
import React, { FC, useState } from 'react';
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
            <MediaPlayer song={songSelected} />
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
            <div className={styles.actions}>
                <Icon icon="ant-design:youtube-outlined" height={20} />
                <Icon icon="maki:karaoke" height={20} />
                <Icon icon="carbon:shrink-screen" height={20} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    <Icon icon="clarity:volume-up-solid" height={20} />
                    <input type="range" id="volume-slider" max="100" value="50
                    " />
                </div>
            </div>

        </div>
    );
};
interface MediaPlayerProps {
    song: SongItem;
}

const MediaPlayer: FC<MediaPlayerProps> = (props: MediaPlayerProps) => {
    const { song } = props;
    const [state, setState] = useState({
        playing: false
    });
    const handleChangeState = (object: any) => {
        setState({
            ...state,
            ...object,
        });
    }
    return (
        <div className={styles.mediaPlayer}>
            <div className={styles.actions}>
                <Icon icon="el:random" color="white" />
                <Icon icon="bx:skip-previous" color="white" height={30} />
                {
                    state.playing
                        ? <Icon icon="bx:pause-circle" height={30} onClick={() => handleChangeState({ playing: false })} />
                        : <Icon icon="ant-design:play-circle-outlined" height={30} onClick={() => handleChangeState({ playing: true })} />
                }
                <Icon icon="bx:skip-next" color="white" height={30} />
                <Icon icon="cil:loop" color="white" />
            </div>
            <div className={styles.slideSeek}>
                <span className={styles.duration}>00:00</span>
                <input type="range" id="volume-slider" max="100" value="50" style={{ maxWidth: '60%', width: '100%' }} />
                <span className={styles.duration}>00:00</span>
            </div>
        </div>
    );
};
