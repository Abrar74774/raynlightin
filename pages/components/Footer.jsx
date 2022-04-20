import styles from './styles/Footer.module.css'

export default function Footer(props) {
    return (
        <footer className={styles.container}>
            <div className={styles.contact}>
                <h1>Follow</h1>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <h1>Contact</h1>
                <a href="mailto:abrarshahriarhossain@gmail.com">email@email.com</a>
            </div>
            <div className={styles.by}>
                Website by&nbsp;
                <a
                    href="https://abrar74774.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abrar Shahriyar Hossain
                </a>
            </div>
        </footer>
    )
}