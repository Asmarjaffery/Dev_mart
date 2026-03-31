import React from 'react'
import styles from './checkout.module.scss'
import PrimaryButton from '../../components/button/primary'

const CheckoutSummary = () => {
    return (
        <div className={`${styles.checkout_summary} mb-5`}>          
         <h4> Card Total</h4>
            <div className='d-flex justify-content-between border-bottom border-3 py-2'>
                <div>Subtotal</div>
                <div>$1750</div>
            </div>
            <div className='d-flex justify-content-between border-bottom border-3 py-2'>
                <div>Pay by</div>
                <div>Card</div>
            </div>
            <div className='d-flex justify-content-between py-2'>
                <div>Total</div>
                <div>$1750</div>
            </div>
            <div className='mt-2'>
                <PrimaryButton>Process to Checkout</PrimaryButton>
            </div>
        </div>
    )
}

export default CheckoutSummary