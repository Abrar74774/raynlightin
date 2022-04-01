import styles from './styles/LongLasting.module.css'
import lamp from '../../public/lamp_simple.jpg'
import Image from 'next/image'

export default function LongLasting(props) {
    return (
        <section className={styles.longL}>
            
            <div>
                <Image
                    src={lamp}
                    alt={"Fluorescent Lamp"}
                    layout='intrinsic'
                />
            </div>
            <div>
                <h2>Long Lasting</h2>
                <p>
                    Reliability is our best Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatem in, delectus deleniti assumenda quidem tempora labore aspernatur facere maiores amet quibusdam. Inventore assumenda obcaecati voluptate, enim sunt numquam.
                </p>
            </div>
        </section>
    )
}