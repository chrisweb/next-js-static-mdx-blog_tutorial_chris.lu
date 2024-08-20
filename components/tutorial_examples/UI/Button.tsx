import styles from './button.module.css'
 
const UIButton: React.FC = (): JSX.Element => {
 
    return (
        <button id={styles.myIdStyle} className={`${styles.reset} ${styles.core}`}>
            I&apos;m a UI button
        </button>
    )
}
 
export default UIButton