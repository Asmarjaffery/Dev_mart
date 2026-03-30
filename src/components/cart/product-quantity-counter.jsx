import React from 'react'
import cartIcon from '../../assets/icons/cart-icon.svg'
import styles from './shopping-cart.module.scss'
import { IoAddOutline } from 'react-icons/io5'
import { AiOutlineMinus } from 'react-icons/ai'

export const ProductQuantityCounter = () => {
    return (

        <div className={`${styles.product_quantity_product} d-flex justify-content-between align-items-center`}>
            <span className={styles.update_counter_button}><IoAddOutline size={27}/></span>
            <span className={styles.counter_value}>4</span>
            <span className={styles.update_counter_button}><AiOutlineMinus size={27}/></span>
        </div>
    )
}

export default ProductQuantityCounter