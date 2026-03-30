import React, { useRef } from 'react';
import styles from './slider.module.scss'
import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";
import c5 from "../../assets/images/c5.png";
import c6 from "../../assets/images/c6.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CategoryCard from '../card/category-card';
import dummyData from '../../services/dummy-data.json';
import ProductCard from '../card/product-card';
console.log(dummyData.products)

export default function BestProductSlider() {
    const swiperRef = useRef(null);  

    return (
        <>
            <div className={`${styles.swiper_button_container} mb-3`}>
                {/* ✅ Step 2: onClick pe swiper control karo */}
                <div className={`${styles.nav_btn}`} 
                     onClick={() => swiperRef.current?.slidePrev()}>
                    <FaArrowLeft />
                </div>
                <div className={`${styles.nav_btn}`} 
                     onClick={() => swiperRef.current?.slideNext()}>
                    <FaArrowRight />
                </div>
            </div>
            <Swiper
                onSwiper={(swiper) => swiperRef.current = swiper}  
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 3, spaceBetween: 40 },
                    1200: { slidesPerView: 4, spaceBetween: 30 },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                
                {dummyData?.products?.map((item, key) => (
                    <SwiperSlide key={key} className='d-flex justify-content-center'>
                        <ProductCard data ={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}