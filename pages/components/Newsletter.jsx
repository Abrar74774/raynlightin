import styles from "./styles/Newsletter.module.css"
import Image from 'next/image'

export default function View(props) {
    return (
        <section 
            className={styles.background}
        >
            <Image
                src="/lighting_over_escalator.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <div className={styles.subscribe}>
                <div className="container">
                    <h2>Newsletter</h2>
                    <p>Subscribe to our newsletter for latest updates</p>
                    <div className={styles.form}>
                        <label htmlFor="email"></label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="Your Email Address"
                        />
                        <button type="submit" className={`view transparent ${styles.submit}`}>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>    
    )
}