import styles from './Spinner.module.css'

export default function Spinner() {
    
    return(
        <div className={styles.sk_chase}>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
        </div>
    )
}