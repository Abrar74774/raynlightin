import { useEffect, useState } from "react/cjs/react.development"
import styles from "./styles/Navbar.module.css"


export default function Navbar(props) {
    const [away, setAway] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);
    const handleScroll = (e) => {
        const currentScroll = window.pageYOffset;
        console.log(currentScroll)
        if (currentScroll > prevScroll) setAway(true);
        else setAway(false);
        setPrevScroll(currentScroll); // TO DO : Fix finicky navbar : Maybe DOne???
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    })
    return (
        <div className={styles["nav-container"]} style={{transform: away? 'translateY(-100%)' : null}}>
            <div className={styles.logo}>Ray_N</div>
            <div className={styles.hamburger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}