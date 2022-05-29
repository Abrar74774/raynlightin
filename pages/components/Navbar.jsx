import { useEffect, useState } from "react"
import styles from "./styles/Navbar.module.css"


export default function Navbar(props) {
    const [away, setAway] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [widerScreen, setWiderScreen] = useState(false);

    const handleScroll = (e) => {
        if (!widerScreen) {
            const currentScroll = window.pageYOffset;
            if (currentScroll > prevScroll) setAway(true);
            else setAway(false);
            setPrevScroll(currentScroll); // TO DO : Fix finicky navbar : Maybe DOne???
        }
    }

    const handleResize = (e) => {
        setWiderScreen(window.innerWidth > 786);
    }

    useEffect(() => {
        setWiderScreen(window.innerWidth > 786);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll',handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    })
    return (
        <div className={styles["nav-container"]} style={{transform: away? 'translateY(-100%)' : null}}>
            <div className={`container ${(menuOpen || widerScreen)? styles["nav-menu"]: ""}`}>
                <div className="flex">
                    <div className={styles.logo}>Ray_N</div>
                    <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {(menuOpen || widerScreen) &&
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">View</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                }
            </div>
        </div>
    )
}