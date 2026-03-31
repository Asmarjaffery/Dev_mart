import React, { useState, useEffect } from 'react'
import styles from './scroll-to-top.module.scss'
import { IoArrowUpOutline } from 'react-icons/io5'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return isVisible && (
        <button className={styles.scroll_to_top_btn} onClick={scrollToTop}>
            <IoArrowUpOutline size={24} />
        </button>
    )
}

export default ScrollToTopButton