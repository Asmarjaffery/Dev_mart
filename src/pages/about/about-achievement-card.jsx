import React from 'react'
import styles from './about.module.scss'

export const AboutAchievementCard = ({ iconSrc, title, desc, isActive }) => {
    return (
        <div className={`${styles.stat_card} ${isActive ? styles.stat_card_active : ''} mt-5`}>
            <figure className={styles.stat_card_figure}>
                <img src={iconSrc} alt={title} />
            </figure>
            <h5 className={styles.stat_card_title}>{title}</h5>
            <p className={styles.stat_card_desc}>{desc}</p>
        </div>
    )
}

export default AboutAchievementCard