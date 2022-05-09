import styles from './styles/PicDesc.module.css'
import Image from 'next/image'

export default function PicDesc(props) {
    return (
        <section className={`${styles["pic-desc"]} container`}>
            <div className={styles["pic-container"]}>
                <Image
                    src={props.picSrc}
                    alt={props.picAlt}
                    layout='fill'
                    objectFit='cover'
                    objectPosition={props.picObjectPosition || "center 80%"}
                />
            </div>
            <div className={styles.desc}>
                {props.desc}
            </div>
        </section>
    )
}