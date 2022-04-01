import { useEffect } from "react/cjs/react.development"
import styles from "./styles/Navbar.module.css"


export default function Navbar(props) {
    
    const handleScroll = (e) => {
        console.log(this)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })
    return (
        <div className={styles["nav-container"]}>
            <div className={styles.logo}>Ray_N</div>
            <div className={styles.hamburger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}