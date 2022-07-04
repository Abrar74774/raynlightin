import styles from './styles/PicDesc.module.css'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function PicDesc(props) {
    //const [scroll, setScroll] = useState(0); // **WILL BE USED FOR PARALLAX

    // const handleScroll = () => {
    //     setScroll(window.scrollY);
    //     console.log(scroll)
    // }
    // useEffect(() => {
    //     setScroll(window.scrollY);
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // })

    const control = useAnimation();
    const [ref, inView] = useInView({
        threshold:1,
        rootMargin: '20%'
    });

    useEffect(() => {
        if (inView) {
            control.start({opacity: 1});
        } 
    }, [control, inView]);
    return (
        <section>
            <div className="container">
                <div className={`${styles["pic-desc"]} ${props.swap ? styles.reverse : ""}`}>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0}} 
                        transition={{duration:0.7}}
                        animate={control}
                        className={styles["pic-container"]}
                    >
                        <Image
                            priority
                            src={props.picSrc}
                            alt={props.picAlt}
                            layout='fill'
                            objectFit='cover'
                            objectPosition={props.picObjectPosition || 'center center'}
                            //objectPosition={ `center ${100 - scroll/10}%`}//props.picObjectPosition || "center 80%"}
                        />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0}}
                        transition = {{duration: 0.7, delay: 0.5}}
                        animate={control}
                        className={styles.desc}
                    >
                        {props.desc}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}