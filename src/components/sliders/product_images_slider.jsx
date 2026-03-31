import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styles from '../../pages/products_info/product_info.module.scss'

export const ProductImagesSlider = ({ images }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={148}
            breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 40 },
                1200: { slidesPerView: 4, spaceBetween: 30 },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {images.map((src, key) => (
                <SwiperSlide key={key} className='d-flex justify-content-center'>
                    <img className={styles.product_other_images} src={src} alt="other images of product" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ProductImagesSlider