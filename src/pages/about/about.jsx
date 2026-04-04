import React from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../components/layouts/page-layout'
import ShoppingImage from '../../assets/images/about.jpg'
import ShopIcon from '../../assets/icons/shopping-bag.svg'
import SaleIcon from '../../assets/icons/bag-icon.svg'
import CustomerIcon from '../../assets/icons/dollar-icon.svg'
import GrossIcon from '../../assets/icons/shop-icon.svg'
import AboutAchievementCard from './about-achievement-card'       
import TeamSection from '../../components/sliders/team-section-slider'
import { teamMembers } from '../../services/team-data'
import styles from './about.module.scss'
import ProductShippingCard from '../products_info/product_shipping_card'
import returnIcon from '../../assets/icons/customer_services.svg'
import deliveryIcon from '../../assets/icons/delivery-fast.svg'
import CheckIcon from '../../assets/icons/checkmark.svg'

export const AboutPage = () => {
    return (
        <PageLayout>

            {/* Breadcrumb */}
            <nav className={`container mt-5 ${styles.breadcrumb_nav}`} aria-label="breadcrumb">
                <ol className={styles.breadcrumb_list}>
                    <li className={styles.breadcrumb_item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`${styles.breadcrumb_item} ${styles.breadcrumb_active}`} aria-current="page">
                        About
                    </li>
                </ol>
            </nav>

            {/* Our Story */}
            <section className={styles.story_section}>
                <div className="container-fluid px-0 mt-5">
                    <div className="row g-0 align-items-center">
                        <div className={`col-lg-6 col-12 ${styles.story_text}`}>
                            <div>
                                <h2 className={styles.story_title}>Our Story</h2>
                                <p className={styles.story_desc}>
                                    Launced in 2015, Exclusive is South Asia's premier online shopping
                                    marketplace with an active presense in Bangladesh. Supported by wide
                                    range of tailored marketing, data and service solutions, Exclusive has
                                    10,500 sallers and 300 brands and serves 3 millioons customers across
                                    the region.
                                </p>
                                <p className={`${styles.story_desc} mb-0`}>
                                    Exclusive has more than 1 Million products to offer, growing at a very
                                    fast. Exclusive offers a diverse assotment in categories ranging from
                                    consumer.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 p-0">
                            <img
                                src={ShoppingImage}
                                alt="Two women shopping with colorful bags"
                                className={styles.story_image}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Achievement Cards */}
            <div className="container my-5">
                <div className="row g-3">
                    <div className="col-6 col-md-3">
                        <AboutAchievementCard iconSrc={GrossIcon} title="10.5k" desc="Sallers active our site" />
                    </div>
                    <div className="col-6 col-md-3">
                        <AboutAchievementCard iconSrc={CustomerIcon} title="33k" desc="Monthly Product Sale" isActive={true} />
                    </div>
                    <div className="col-6 col-md-3">
                        <AboutAchievementCard iconSrc={ShopIcon} title="45.5k" desc="Customer active in our site" />
                    </div>
                    <div className="col-6 col-md-3">
                        <AboutAchievementCard iconSrc={SaleIcon} title="25k" desc="Annual gross sale in our site" />
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <TeamSection members={teamMembers} />

            {/* Shipping Info */}
            <div className="container my-5 py-4">
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
            </div>

        </PageLayout>
    )
}

export default AboutPage