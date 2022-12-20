import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.containerFooter}>
            <h1>Eccomerce<span className={styles.name}>Diego</span> </h1>
            <div className={styles.icons}>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
            </div>
        </footer>
    )
}
