import { Icon } from '@iconify/react';
import styles from '../../styles/home.module.css';
import SlideShow from '../@core/components/slideshow/SlideShow';
import Image from 'next/image';
import { CardSong } from '../types';

const thumbnails: CardSong[] = [
  {
    id: 1,
    thumbnail: 'thu2.webp',
    title: 'Nhạc Cho Thứ Hai',
    description: 'Vui vẻ cho cả ngày với những lựa chọn ',
  },
  {
    id: 2,
    thumbnail: 'combohit.webp',
    title: 'Nhạc Cho Thứ Hai',
    description: 'Vui vẻ cho cả ngày với những lựa chọn ',
  },
  {
    id: 3,
    thumbnail: 'nhacmoi.webp',
    title: 'Nhạc Cho Thứ Hai',
    description: 'Vui vẻ cho cả ngày với những lựa chọn ',
  },
  {
    id: 4,
    thumbnail: 'todayhit.webp',
    title: 'Nhạc Cho Thứ Hai',
    description: 'Vui vẻ cho cả ngày với những lựa chọn ',
  },
  {
    id: 4,
    thumbnail: 'vpop.webp',
    title: 'Nhạc Cho Thứ Hai',
    description: 'Vui vẻ cho cả ngày với những lựa chọn ',
  },
];
export default function Home() {
  return (
    <main className="main">
      {/* <div className="row">
        <h1 className={styles.title}>
          Thư viện
        </h1>
        <Icon icon="ant-design:play-circle-filled" color="#033dfc" width={50} />
      </div> */}
      <SlideShow />
      <div className="particle">
        <p className={styles.description}>
          Hay nhất của 2022
          <Icon icon="material-symbols:star-rounded" color="#c3ff03" width={30} />
        </p>
        <div className={styles.grid}>
          {
            thumbnails.map((thumb, index) => {
              return (
                <div className={styles.card} key={index}>
                  <Image
                    width={250}
                    height={250}
                    src={'/images/thumbnails/' + thumb.thumbnail}
                    alt={thumb.thumbnail}
                  />
                  <div className={styles.title}>
                    {thumb.title}
                  </div>
                  <div className={styles.desc}>
                    {thumb.description}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="particle">
        <p className={styles.description}>
          Mới phát hành
        </p>
        <div className={styles.newRelease}>
          
        </div>
      </div>
    </main>
  )
}
