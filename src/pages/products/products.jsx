import React from 'react'
import PageLayout from '../../components/layouts/page-layout'
import SectionHeading from '../../components/section-headings/section-heading'
import styles from './products.module.scss'
import dummyData from '../../services/dummy-data.json'
import ProductCard from '../../components/card/product-card'



export const ProductPage = () => {
    return (
        <PageLayout>
            {/* Explore our Products*/}
            <div className={`${styles.best_product_section} container my-5 pt-5`}>
                <SectionHeading title={"This Month"}>Best Selling Products</SectionHeading>
                <div className='d-flex flex-wrap justify-content-center justify-content-md-between mt-4'>
                    {
                        dummyData?.products?.map(item => (
                            <div key={item.id} className='mt-4 d-flex justify content center'>
                                <ProductCard data={item} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </PageLayout>
    )
}

export default ProductPage