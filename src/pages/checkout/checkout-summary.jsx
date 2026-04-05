import React from 'react'
import styles from './checkout.module.scss'
import PrimaryButton from '../../components/button/primary'
import useShoppingCart from '../../hooks/use-shopping-cart'
import { Helpers } from '../../services/helpers'

const CheckoutSummary = () => {
    const { getCartProducts } = useShoppingCart();
    const cartProducts = getCartProducts();

    const subtotal = cartProducts.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);

    return (
        <div className={`${styles.checkout_summary} mb-5 w-100`}>
            <h4>Cart Total</h4>
            <div className='d-flex justify-content-between border-bottom border-3 py-2'>
                <div>Subtotal</div>
                <div>{Helpers.priceFormatter(subtotal)}</div>
            </div>
            <div className='d-flex justify-content-between border-bottom border-3 py-2'>
                <div>Pay by</div>
                <div>Card</div>
            </div>
            <div className='d-flex justify-content-between py-2'>
                <div>Total</div>
                <div>{Helpers.priceFormatter(subtotal)}</div>
            </div>
            <div className='mt-2'>
                <PrimaryButton>Process to Checkout</PrimaryButton>
            </div>
        </div>
    );
};

export default CheckoutSummary;