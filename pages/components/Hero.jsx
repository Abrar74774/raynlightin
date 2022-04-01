import Image from 'next/image'
import heroPic from '/public/strtlights.jpg'
import styles from './styles/Hero.module.css'
export default function Hero(props) {
    return(
        <header className={styles.hero}>
            <div className={styles.heroImage}>
                <Image
                    src={heroPic}
                    alt={"RayN Lighting"}
                    layout='intrinsic'
                />
            </div>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        <span className={styles.name}>
                            Ray_N{' '}
                        </span>
                        <br />
                        <span className={styles.name}>
                            Lighting
                        </span>
                        <br /> 
                        Shining Your Way Forward, Efficiently
                    </h1>
                </div>
                <button className={styles.view}>View Listing</button>
            </div>
        </header>
    )
}