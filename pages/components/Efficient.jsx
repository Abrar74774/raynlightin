import PicDesc from './PicDesc'

export default function Efficient(props) {
    return (
        <PicDesc
            picSrc="/fluo.jpg"
            picAlt="Efficient Lighting"
            desc={
                <>
                    <h1>Efficient</h1>
                    <p>
                        RayN manufactures the best Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati voluptatem in, delectus deleniti assumenda quidem tempora labore aspernatur facere maiores amet quibusdam. Inventore assumenda obcaecati voluptate, enim sunt numquam.
                    </p>
                    <button className='view'>Browse Products</button>
                </>
            }
        />
    )
}