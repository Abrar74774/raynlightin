import PicDesc from './PicDesc'

export default function LongLasting(props) {
    return (
        <PicDesc
            picSrc="/lamp_simple.jpg"
            picAlt="Long lasting products"
            picObjectPosition="center 20%"
            desc={
                <>
                <h2>Long Lasting</h2>
                    <p>
                       Reliability is our best Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatem in, delectus deleniti assumenda quidem tempora labore aspernatur facere maiores amet quibusdam. Inventore assumenda obcaecati voluptate, enim sunt numquam.
                   </p>
                   <button className='view'>Browse Products</button>
                </>
            }
        />
        // <section className={styles.longL}>
            
        //     <div>
        //         <Image
        //             src={lamp}
        //             alt={"Fluorescent Lamp"}
        //             layout='intrinsic'
        //         />
        //     </div>
        //     <div>
        //         <h2>Long Lasting</h2>
        //         <p>
        //             Reliability is our best Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatem in, delectus deleniti assumenda quidem tempora labore aspernatur facere maiores amet quibusdam. Inventore assumenda obcaecati voluptate, enim sunt numquam.
        //         </p>
        //     </div>
        // </section>
    )
}