import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './slider.module.scss';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BannerSliders({ images }) {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bannerSlider"
            >
                {
                    images?.map((item, key) => (
                        <SwiperSlide key={key}>
                            <div className={styles.img_container}>
                                <img src={item} alt="" />
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper >
        </>
    );
}
