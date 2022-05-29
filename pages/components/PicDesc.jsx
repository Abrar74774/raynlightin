import styles from './styles/PicDesc.module.css'
import Image from 'next/image'

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
    return (
        <section>
            <div className="container">
                <div className={styles["pic-desc"]}>
                    <div className={styles["pic-container"]}>
                        <Image
                            
                            src={props.picSrc}
                            alt={props.picAlt}
                            layout='fill'
                            objectFit='cover'
                            objectPosition={props.picObjectPosition || 'center center'}
                            //objectPosition={ `center ${100 - scroll/10}%`}//props.picObjectPosition || "center 80%"}
                        />
                    </div>
                    <div className={styles.desc}>
                        {props.desc}
                    </div>
                </div>
            </div>
        </section>
    )
}