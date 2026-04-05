import React, { useState } from 'react'
import PageLayout from '../../components/layouts/page-layout'
import SectionHeading from '../../components/section-headings/section-heading'
import styles from './products.module.scss'
import dummyData from '../../services/dummy-data.json'
import ProductCard from '../../components/card/product-card'
import { useSearchParams } from 'react-router-dom'

export const ProductPage = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') ?? '';
    const [selectedCategory, setSelectedCategory] = useState('All');


    const categories = ['All', ...new Set(dummyData.products.map(p => p.category))];

    const filteredProducts = dummyData.products.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
    <PageLayout>
        <div className={`${styles.best_product_section} container my-5 pt-5`}>
            <SectionHeading title={"This Month"}>Best Selling Products</SectionHeading>

            {searchQuery && (
                <p className={styles.search_result_text}>
                    Search results for: <strong>"{searchQuery}"</strong> — {filteredProducts.length} products found
                </p>
            )}

            <div className={styles.category_filters}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`${styles.filter_btn} ${selectedCategory === cat ? styles.active : ''}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={styles.products_grid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(item => (
                        <div key={item.id}>
                            <ProductCard data={item} />
                        </div>
                    ))
                ) : (
                    <p className={styles.no_results}>
                        No products found for "<strong>{searchQuery}</strong>"
                    </p>
                )}
            </div>

        </div>
    </PageLayout>
)
}

export default ProductPage