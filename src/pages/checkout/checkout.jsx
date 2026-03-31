import React from 'react'
import PageLayout from '../../components/layouts/page-layout'
import CartProduct from './cart-product'
import CheckoutSummary from './checkout-summary'
import styles from './checkout.module.scss'

export const CheckOutPage = () => {
    return (
        <>
            <PageLayout>
                <div>
                    <table className="table table-borderless my-5 container">
                        <thead>
                            <tr className='mb-5'>
                                <td scope="col">Product</td>
                                <td scope="col">Price</td>
                                <td scope="col">Quantity</td>
                                <td scope="col">Subtotal</td>
                            </tr>
                        </thead>

                        <tbody>
                            <CartProduct></CartProduct>
                            <CartProduct></CartProduct>
                        </tbody>                    </table>
                    <div className="d-flex justify-content-end justify-content-lg-end mb-5 pe-5">
                        <CheckoutSummary></CheckoutSummary>
                    </div>
                </div>

            </PageLayout>
        </>
    )
}

export default CheckOutPage