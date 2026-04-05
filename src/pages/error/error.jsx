import { Link } from 'react-router-dom'
import styles from './error.module.scss'

const ErrorPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <h1 className={styles.error_code}>404</h1>

                <div className={styles.illustration}>
                    <div className={styles.circle}></div>
                    <div className={styles.person}>
                        <div className={styles.head}></div>
                        <div className={styles.body}></div>
                        <div className={styles.shadow}></div>
                    </div>
                </div>

                <h2 className={styles.title}>Oops! Page Not Found</h2>
                <p className={styles.desc}>
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className={styles.btn_group}>
                    <Link to="/" className={styles.btn_primary}>
                        Go to Homepage
                    </Link>
                    <Link to="/products" className={styles.btn_outline}>
                        Browse Products
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ErrorPage