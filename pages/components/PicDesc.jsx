import styles from './styles/PicDesc.module.css'
import Image from 'next/image'

export default function PicDesc(props) {
    return (
        <section className={styles["pic-desc"]}>
            
            <div className={styles["pic-container"]}>
                <Image
                    src={props.picSrc}
                    alt={props.picAlt}
                    layout='fill'
                    objectFit='cover'
                    objectPosition={props.picObjectPosition || "center 100%"}
                />
            </div>
            <div>
                {props.desc}
                {/* <h2>Efficient</h2>
                <p>
                    RayN manufactures the best Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatem in, delectus deleniti assumenda quidem tempora labore aspernatur facere maiores amet quibusdam. Inventore assumenda obcaecati voluptate, enim sunt numquam.
                </p> */}
            </div>
        </section>
    )
}