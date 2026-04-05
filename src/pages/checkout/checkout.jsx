import React from 'react'
import PageLayout from '../../components/layouts/page-layout'
import CartProduct from './cart-product'
import CheckoutSummary from './checkout-summary'
import styles from './checkout.module.scss'
import useShoppingCart from '../../hooks/use-shopping-cart'

export const CheckOutPage = () => {
    const { getCartProducts } = useShoppingCart();
    const cart_product = getCartProducts();

    return (
        <PageLayout>
            <div className='container my-4 my-lg-5'>

                {/* Table Header */}
                <div className={`row d-none d-md-flex ${styles.table_header}`}>
                    <div className="col-md-5">Product</div>
                    <div className="col-md-2">Price</div>
                    <div className="col-md-3">Quantity</div>
                    <div className="col-md-2">Subtotal</div>
                </div>

                {/* Product Rows */}
                {cart_product && cart_product.length > 0 &&
                    cart_product.map(item => (
                        <CartProduct key={item.product_id} data={item} />
                    ))
                }

                {/* Checkout Summary */}
                <div className="d-flex justify-content-center justify-content-md-end mb-5 mt-4">
                    <div className={styles.summary_wrapper}>
                        <CheckoutSummary />
                    </div>
                </div>

            </div>
        </PageLayout>
    );
};

export default CheckOutPage;