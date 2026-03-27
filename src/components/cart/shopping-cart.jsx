import React from 'react'
import cartIcon from '../../assets/icons/cart-icon.svg'
import styles from './shopping-cart.module.scss'

export const ShoppingCart = () => {
    return (
        <div className={styles.shopping_cart_icon}>
            <img src={cartIcon} alt="search icon" />
        </div>
    )
}

export default ShoppingCart