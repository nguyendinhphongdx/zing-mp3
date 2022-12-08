/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import React, { FC, useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import Lottie from 'react-lottie';
import { SongItem } from '../../../types';
import styles from '../../styles/footer.module.scss';
import { calculateTime } from '../../ultis/helpers';
import * as animationData from '../../lottie/music-notes.json';

interface Props {

};

const songSelected: SongItem = {
    id: 1,
    name: 'Chuyện Đôi Ta (Freak D Lofi Ver.)',
    description: 'Chuyện Đôi Ta (Freak D Lofi Ver.) - Emcee L ft Muộii',
    image: '/images/chuyen-doi-ta.webp',
    singer: 'Emcee L ft Muộii',
    source: '/mp3/chuyen-doi-ta.mp3',
    isFavorite: true,
}

const FooterPlayer: FC<Props> = (props: Props) => {

    const refAudio = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [state, setState] = useState({
        playing: false,
        currentVolume: 30,
        duration: 0,
    });
    const handleChangeState = (object: any) => {
        setState({
            ...state,
            ...object,
        });
    }

    const handleSetDuration = () => {
        if (refAudio.current) {
            setState({
                ...state,
                duration: refAudio.current?.duration,
            });
            refAudio.current.addEventListener('timeupdate', () => {
                refAudio.current?.currentTime && setCurrentTime(refAudio.current?.currentTime);
            })
        }
    }

    useEffect(() => {
        handleSetDuration();
    }, [])

    useEffect(() => {
        if (refAudio && refAudio.current) {
            if (!state.playing) {
                refAudio?.current?.pause();
            } else {
                refAudio?.current?.play();
            }
        }

    }, [state.playing])

    // useEffect(() => {
    //     if(refAudio.current?.currentTime){
    //         setState({
    //             ...state,
    //             currentTime: refAudio.current?.currentTime
    //         });
    //     }
    // }, [refAudio.current?.currentTime])

    return (
        <div className={styles.container}>
            <audio ref={refAudio} src={songSelected.source} preload="metadata" />
            <SongContainer song={songSelected} playing={state.playing} />
            <MediaPlayer
                song={songSelected}
                currentTime={currentTime}
                playing={state.playing}
                onChangeState={handleChangeState}
                duration={state.duration}
            />
            <ControlMedia song={songSelected} volume={state.currentVolume} onChangeState={handleChangeState} />
        </div>
    );
};
export default FooterPlayer;

interface CardSongProps {
    song: SongItem;
    playing: boolean;
}

const SongContainer: FC<CardSongProps> = (props: CardSongProps) => {
    const { song, playing } = props;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={styles.songContainer}>
            <>
                <div className={styles.fly}>
                    <Lottie options={defaultOptions}
                        height={100}
                        width={70}
                        isStopped={!playing}
                    />
                </div>
            </>
            <div className={styles.image}>
                <Image className={playing ? styles.rotate : ''} src={song.image} alt={song.image} width={60} height={60} />
            </div>
            <div className={styles.mation}>
                <p className={styles.name}>{props.song.name}</p>
                <span className={styles.singer}>{props.song.singer}</span>
            </div>
            <div className={styles.actions}>
                <Icon icon="ant-design:heart-filled" width={25} />
                <Icon icon="bi:three-dots" width={25} />
            </div>
        </div>
    );
};
interface ControlMediaProps {
    song: SongItem;
    volume: number;
    onChangeState: (obj: any) => void;
}

const ControlMedia: FC<ControlMediaProps> = (props: ControlMediaProps) => {
    const { song, volume, onChangeState } = props;

    return (
        <div className={[styles.songContainer, styles.flexEnd].join(' ')}>
            <div className={styles.actions}>
                <div className={styles.hiddenScroll}>
                    <Icon icon="ant-design:youtube-outlined" height={20} />
                </div>
                <div className={styles.hiddenScroll}>
                    <Icon icon="maki:karaoke" height={20} />
                </div>
                <div className={styles.hiddenScroll}>
                    <Icon icon="carbon:shrink-screen" height={20} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    <div className="icon">
                        <Icon icon="clarity:volume-up-solid" height={20} />
                    </div>
                    <input
                        type="range"
                        id="volume-slider"
                        max="100"
                        value={volume}
                        onChange={(e) => onChangeState({ valueVolume: e.target.value })}
                    />
                </div>
            </div>

        </div>
    );
};
interface MediaPlayerProps {
    song: SongItem;
    playing: boolean;
    onChangeState: (object: any) => void;
    currentTime: number;
    duration: number;
}

const MediaPlayer: FC<MediaPlayerProps> = (props: MediaPlayerProps) => {
    const { song, playing, onChangeState, currentTime, duration } = props;

    return (
        <div className={styles.mediaPlayer}>
            <div className={styles.actions}>
                <div className="icon">
                    <Icon icon="el:random" color="white" />
                </div>
                <div className="icon">
                    <Icon icon="bx:skip-previous" color="white" height={30} />
                </div>
                <div className="icon">
                    {
                        playing
                            ? <Icon icon="bx:pause-circle" height={30} onClick={() => onChangeState({ playing: false })} />
                            : <Icon icon="ant-design:play-circle-outlined" height={30} onClick={() => onChangeState({ playing: true })} />
                    }
                </div>
                <div className="icon">
                    <Icon icon="bx:skip-next" color="white" height={30} />

                </div>
                <div className="icon">
                    <Icon icon="cil:loop" color="white" />

                </div>
            </div>
            <div className={styles.slideSeek}>
                <span className={styles.duration}>{calculateTime(currentTime)}</span>
                <input
                    type="range"
                    id="volume-slider"
                    max={Math.max(duration)}
                    value={currentTime}
                    style={{ maxWidth: '60%', width: '100%' }}
                    onChange={(e) => onChangeState({ currentTime: e.target.value })}
                />
                <span className={styles.duration}>{calculateTime(duration)}</span>
            </div>
        </div>
    );
};
