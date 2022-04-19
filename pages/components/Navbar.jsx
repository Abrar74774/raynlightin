import { useEffect, useState } from "react/cjs/react.development"
import styles from "./styles/Navbar.module.css"


export default function Navbar(props) {
    const [away, setAway] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (e) => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > prevScroll) setAway(true);
        else setAway(false);
        setPrevScroll(currentScroll); // TO DO : Fix finicky navbar : Maybe DOne???
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    })
    return (
        <div className={`${styles["nav-container"]} ${menuOpen? styles["nav-menu"]: ""}`} style={{transform: away? 'translateY(-100%)' : null}}>
            <div className="flex">
                <div className={styles.logo}>Ray_N</div>
                <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {menuOpen &&
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">View</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            }
        </div>
    )
}