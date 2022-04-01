import styles from './styles/Efficient.module.css'
import fluorescent from '../../public/fluo.jpg'
import Image from 'next/image'

export default function Efficient(props) {
    return (
        <section className={styles.efficient}>
            
            <div>
                <Image
                    src={fluorescent}
                    alt={"Fluorescent Lamp"}
                    layout='intrinsic'
                />
            </div>
            <div>
                <h2>Environment Safe</h2>
                <p>
                    RayN manufactures the best Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatem in, delectus deleniti assumenda quidem tempora labore aspernatur facere maiores amet quibusdam. Inventore assumenda obcaecati voluptate, enim sunt numquam.
                </p>
            </div>
        </section>
    )
}