import React from 'react'
import PageLayout from '../../components/layouts/page-layout'
import BannerSliders from '../../components/sliders/banner'
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner.webp";
import styles from './home.module.scss'
import SectionHeading from '../../components/section-headings/section-heading';
import CategorySlider from '../../components/sliders/category-slider';
import ProductCard from '../../components/card/product-card';
import BestProductSlider from '../../components/sliders/best-product-slider';
import dummyData from '../../services/dummy-data.json'
import PrimaryButton from '../../components/button/primary';
import { useNavigate } from 'react-router';
import featureimg from '../../assets/images/featureimg.png'
import ProductShippingCard from '../products_info/product_shipping_card';
import returnIcon from '../../assets/icons/customer_services.svg'
import deliveryIcon from '../../assets/icons/delivery-fast.svg'
import CheckIcon from '../../assets/icons/checkmark.svg'




const bannerImages = [banner1, banner2, banner3]
export const HomePage = () => {
    const navigate = useNavigate();

    return (

        <div>
            <PageLayout>
                <BannerSliders images={bannerImages} />
                {/* Categories*/}
                <div className={`${styles.categoriesSection} container my-5 pt-5`}>
                    <SectionHeading title={"Browse By Category"}>Categories</SectionHeading>
                    <CategorySlider />
                </div>
                {/* Best Selling Products*/}
                <div className={`${styles.best_product_section} container my-5 pt-5`}>
                    <SectionHeading title={"Best Selling Product"}>This Month</SectionHeading>
                    <BestProductSlider />
                </div>
                {/* Explore our Products*/}
                <div className={`${styles.best_product_section} container my-5 pt-5`}>
                    <SectionHeading title={"Explore Our Products"}>Ours Products</SectionHeading>
                    <div className='d-flex flex-wrap justify-content-center justify-content-md-between mt-4'>
                        {
                            dummyData?.products?.slice(0, 8).map(item => (
                                <div key={item.id} className='mt-4'>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-5' style={{ width: "200px", margin: "auto" }}>
                        <PrimaryButton loading={false} disabled={false} onClick={() => { navigate('/products') }}>
                            View All Products
                        </PrimaryButton>
                    </div>
                </div>
                {/*Feature*/}
                <div className='container my-5'>
                    <img src={featureimg} width={"100%"} alt="" />
                </div>
                {/* Product Shipping */}
                {/* <div className="container my-5 py-4">
                    <div className="row text-center">
                        <div className="col-12 col-md-4 py-4">
                            <ProductShippingCard iconSrc={deliveryIcon} title="Free And Fast Delivery" desc="Free delivery for all orders over $140" />
                        </div>
                        <div className="col-12 col-md-4 py-4">
                            <ProductShippingCard iconSrc={returnIcon} title="24/7 Customer Service" desc="Friendly 24/7 customer support" />
                        </div>
                        <div className="col-12 col-md-4 py-4">
                            <ProductShippingCard iconSrc={CheckIcon} title="Money Back Guarantee" desc="We return money within 30 days" />
                        </div>
                    </div>
                </div> */}
                <div className="container my-5 py-4 border rounded">
                    <div className="row text-center">

                        <div className="col-12 col-md-4 py-4 border-end">
                            <ProductShippingCard iconSrc={deliveryIcon} title="Free And Fast Delivery" desc="Free delivery for all orders over $140" />
                        </div>

                        <div className="col-12 col-md-4 py-4 border-end">
                            <ProductShippingCard iconSrc={returnIcon} title="24/7 Customer Service" desc="Friendly 24/7 customer support" />
                        </div>

                        <div className="col-12 col-md-4 py-4">
                            <ProductShippingCard iconSrc={CheckIcon} title="Money Back Guarantee" desc="We return money within 30 days" />
                        </div>

                    </div>
                </div>
            </PageLayout>
        </div>
    )
}

export default HomePage