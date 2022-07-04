import styles from "./styles/Newsletter.module.css"
import Image from 'next/image'

export default function View(props) {
    return (
        <section 
            className={styles.background}
        >
            
            <div className={`${styles["newsletter-form"]}`}>
                <h1>Newsletter</h1>
                <p>Subscribe to our newsletter for latest updates</p>
                <div className={styles["input-area"]}>
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="Your Email Address"
                    />
                    <button type="submit" className={`view transparent ${styles.submit}`}>Subscribe</button>
                </div>
            </div>
        </section>    
    )
}
