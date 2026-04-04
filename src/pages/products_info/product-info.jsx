import React, { useRef, useState } from 'react'
import styles from "./product_info.module.scss"
import PageLayout from '../../components/layouts/page-layout'
import SectionHeading from '../../components/section-headings/section-heading'
import BestProductSlider from '../../components/sliders/best-product-slider'
import { SingleProduct } from '../../services/single-data'
import 'swiper/css/pagination';
import 'swiper/css';
import { Rating } from 'react-simple-star-rating'
import ProductColorVaraints from './product-color'
import PrimaryButton from '../../components/button/primary'
import ProductQuantityCounter from '../../components/cart/product-quantity-counter'
import deliveryIcon from '../../assets/icons/icon-delivery.svg'
import returnIcon from '../../assets/icons/icon-return.svg'
import productShippingCard, { ProductShippingCard } from './product_shipping_card'
import ProductImagesSlider from '../../components/sliders/product-images-slider'

export const ProductInfoPage = () => {
  const swiperRef = useRef(null)
  const [activeColor, setActiveColor] = useState(SingleProduct.color?.[0] ?? null);

  return (
    <PageLayout>
      <section className={`container my-5 py-5`}>
        <div className='row'>
          <div className='col-md-7'>
            <div className={styles.product_images_container}>
              <figure>
                <img src={SingleProduct.img?.[0]} alt="product feature images" />
              </figure>
              <div className={styles.product_images_slider_container}>
                <ProductImagesSlider images={SingleProduct.img} />
              </div>
            </div>
          </div>

          <div className='col-md-5 mt-md-0 mt-5'>
            <div className={styles.product_content_container}>
              <h1 className={styles.product_title}>{SingleProduct.name}</h1>

              {/* Rating + In Stock */}
              <div className='d-flex gap-2 align-items-center'>
                <Rating readonly initialValue={SingleProduct.rating} size={22} />
                <span className={styles.in_stock}>In Stock</span>
              </div>

              {/* Price */}
              <p className={styles.product_price}>${SingleProduct.price}</p>

              {/* Description */}
              <p className={styles.product_desc}>{SingleProduct.description}</p>

              {/* Colors */}
              <div className={`${styles.product_color_variants} d-flex gap-2 align-items-center`}>
                <span className={styles.product_color_title}>Colors:</span>
                {activeColor && <ProductColorVaraints colorsList={SingleProduct.colors} activeColor={activeColor} onChangeColor={setActiveColor} />}
              </div>

              {/* Product Quantity Counter */}
              <div className={`${styles.product_buy_container} d-flex gap-2 align-items-center my-5`}>
                <div><ProductQuantityCounter /></div>
                <div><PrimaryButton onClick={() => null}>Buy Now</PrimaryButton></div>
              </div>

              {/* Product Shipping */}
              <div className={`${styles.product_shipping_container} d-flex flex-column my-5`}>
                <ProductShippingCard iconSrc={deliveryIcon} title="Free Delivery" desc="Enter your postal code for Delivery Availability" />
                <ProductShippingCard iconSrc={returnIcon} title="Return Delivery" desc="Free 30 Days Delivery Return Details" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.best_product_section} container my-5 pt-5`}>
        <SectionHeading title={"Explore More"}>Related Items</SectionHeading>
        <BestProductSlider />
      </div>
    </PageLayout>
  )
}

export default ProductInfoPage