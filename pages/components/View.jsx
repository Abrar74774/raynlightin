import styles from "./styles/View.module.css"


export default function View(props) {
    return (
        <section 
            className={styles.background}
        >
            <button 
                className={styles.viewBtn}
            >
                View&nbsp;Our&nbsp;Products
            </button>
        </section>    
    )
}
