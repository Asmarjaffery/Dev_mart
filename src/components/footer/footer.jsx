import React from 'react'
import styles from './footer.module.scss';
import ScrollToTopButton from '../button/ScrollToTopButton';

const Footer = () => {
    return (
        <>
            <ScrollToTopButton />
            <footer className={styles.footer_container}>
                <span>&copy; Dev trio 2022 All right reserved</span>
            </footer>
        </>
    )
}

export default Footer