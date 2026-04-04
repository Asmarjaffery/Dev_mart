import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './slider.module.scss';

const TeamSection = ({ members }) => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Our People</span>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <p className={styles.sectionSubtitle}>The talented people behind our success</p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          480: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          992: { slidesPerView: 3, spaceBetween: 24 },
          1200: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className={styles.swiper}
      >
        {members.map((member, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} className={styles.image} loading="lazy" />
                <div className={styles.imageOverlay}>
                  <div className={styles.socialLinks}>
                    <a href={member.facebook} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a href={member.linkedin} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a href={member.twitter} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;