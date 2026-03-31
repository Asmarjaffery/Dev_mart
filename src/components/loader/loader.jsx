import React from 'react'
import styles from './loader.module.scss'
import { HashLoader } from 'react-spinners'

export const LoaderPage = () => {
    return (
        <div className={styles.container}>
            <HashLoader size={100} color="#DB4444" speedMultiplier={1.6} />
        </div>
    )
}
export default LoaderPage