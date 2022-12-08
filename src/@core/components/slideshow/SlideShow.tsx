import Image from 'next/image';
import styles from '../../styles/slideshow.module.scss';
const images = ['/images/slide1.jpeg', '/images/slide2.jpeg', '/images/slide3.jpeg', '/images/slide4.jpeg'];
const SlideShow = () => {

    const next = () => {
        const images = document.getElementsByClassName('image-slide');

        if (images.length > 1) {
            for (let i = 0; i < images.length; i++) {
                images[i].classList.remove('to-center');
                images[i].classList.remove('to-left');
            }
            images[0].classList.toggle('to-center');
            images[1].classList.toggle('to-left');
            images[2].classList.toggle('to-left');
        }
    }
    const generateAnimatedSlide = (number: number) => {
        if (number === 0) {
            return styles.toCenter;
        }
        if (number === 1 || number === 2) {
            return styles.toLeft;
        }
        if (number === 3) {
            return styles.toRight;
        }
    }

    return (
        <>
            <div className={styles.container}>
                {
                    images.slice(0, 4).map((image, index) => {
                        return (
                            <div key={image} className={[styles.box, generateAnimatedSlide(index)].join(' ')}>
                                <Image key={image} src={image} alt={image} width={430} height={250} />
                            </div>
                        );
                    })
                }
            </div>
            <button onClick={next}>Next</button>
        </>
    );
}
export default SlideShow;