import styles from './styles/Efficient.module.css'
import Image from 'next/image'
import PicDesc from './PicDesc'

export default function Efficient(props) {
    return (
        <PicDesc
            picSrc="/fluo.jpg"
            picAlt="Efficient Lighting"
            desc={
                <>
                    <h2>Efficient</h2>
                    <p>
                        RayN manufactures the best Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatem in, delectus deleniti assumenda quidem tempora labore aspernatur facere maiores amet quibusdam. Inventore assumenda obcaecati voluptate, enim sunt numquam.
                    </p>
                </>
            }
        />
        // <section className={styles.efficient}>
            
        //     <div style={{position: 'relative', height: '50vh'}}>
        //         <Image
        //             src={'/fluo.jpg'}
        //             alt={"Fluorescent Lamp"}
        //             layout='fill'
        //             objectFit='cover'
        //             objectPosition={"center 100%"}
        //         />
        //     </div>
        //     <div>
        //         <h2>Efficient</h2>
        //         <p>
        //             RayN manufactures the best Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatem in, delectus deleniti assumenda quidem tempora labore aspernatur facere maiores amet quibusdam. Inventore assumenda obcaecati voluptate, enim sunt numquam.
        //         </p>
        //     </div>
        // </section>
    )
}