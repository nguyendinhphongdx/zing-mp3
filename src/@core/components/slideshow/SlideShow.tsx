import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../../styles/slideshow.module.scss';
const images = ['/images/slide1.jpeg', '/images/slide2.jpeg', '/images/slide3.jpeg', '/images/slide4.jpeg'];
const SlideShow = () => {

    const next = () => {
        const images = document.getElementsByClassName('image-slide');
        if (images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                if (images[i].classList.contains(styles.toCenter)) {
                    images[i].classList.add(styles.toRight);
                    images[i].classList.remove(styles.toCenter);
                } else if (images[i].classList.contains(styles.toRight)) {
                    images[i].classList.remove(styles.toCenter);
                    images[i].classList.remove(styles.toRight);
                } else {
                    images[i].classList.add(styles.toCenter);
                }
            }
        }
    }
    const generateAnimatedSlide = (number: number) => {
        if (number === 0) {
            return '';
        }
        if (number === 1) {
            return styles.toCenter;
        }
        if (number === 2) {
            return styles.toRight;
        }
    }

    useEffect(() => {
        const timmer = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(timmer);
    }, [])
    return (
        <>
            <div className={styles.container}>
                {
                    images.slice(0, 3).map((image, index) => {
                        return (
                            <div key={image} className={[styles.box, 'image-slide', generateAnimatedSlide(index)].join(' ')}>
                                <Image key={image} src={image} alt={image} width={360} height={200} />
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
export default SlideShow;