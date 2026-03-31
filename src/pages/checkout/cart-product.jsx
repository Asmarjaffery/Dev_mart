import React from 'react'
import p1 from '../../assets/images/p1.png'
import cross from '../../assets/images/crossIcon.png'
import ProductQuantityCounter from '../../components/cart/product-quantity-counter'
import styles from './checkout.module.scss'
export const CartProduct = () => {
    return (
        <tr className={`${styles.table_row}`}>
            <td className={`${styles.product_cell}`}>
                <div className={`${styles.img_container}`}>
                    <img className={`${styles.product_img}`} src={p1} alt="product" />
                    <img className={`${styles.cross_icon}`} src={cross} alt="cross" />
                </div>
                <p className='m-0 ps-3'>iPhone 14 Pro</p>

            </td>
            <td scope="col">$189</td>
            <td scope="col"><ProductQuantityCounter small></ProductQuantityCounter></td>
            <td scope="col">$189</td>
        </tr>

    )
}

export default CartProduct