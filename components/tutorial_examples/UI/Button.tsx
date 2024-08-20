import styles from './button.module.css'

const UIButton: React.FC = (): JSX.Element => {

    return (
        <button className={styles.reset}>
            I&apos;m a UI button
        </button>
    )
}

export default UIButton