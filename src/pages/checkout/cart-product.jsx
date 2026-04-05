import React from 'react'
import cross from '../../assets/images/crossIcon.png'
import ProductQuantityCounter from '../../components/cart/product-quantity-counter'
import styles from './checkout.module.scss'
import useShoppingCart from '../../hooks/use-shopping-cart'
import { Helpers } from '../../services/helpers'

export const CartProduct = ({ data }) => {
    const { addToCart, decreaseProductQuantityInCart, removeFromCart } = useShoppingCart();
    const total_price = data.product.price * data.quantity;

    return (
        <div className={`row align-items-center ${styles.product_row}`}>

            {/* Product  */}
            <div className="col-12 col-md-5 d-flex align-items-center">
                <div className={styles.img_container}>
                    <img className={styles.product_img} src={data.product?.img?.[0]} alt="product" />
                    <img className={styles.cross_icon} src={cross} alt="cross"
                        onClick={() => removeFromCart(data?.product)} />
                </div>
                <p className={`m-0 ps-3 ${styles.product_name}`}>{data.product.name}</p>
            </div>

            {/* Price */}
            <div className="col-4 col-md-2 mt-2 mt-md-0">
                <span className={`d-block d-md-none ${styles.mobile_label}`}>Price</span>
                {Helpers.priceFormatter(data.product.price)}
            </div>

            {/* Quantity */}
            <div className="col-4 col-md-3 mt-2 mt-md-0">
                <span className={`d-block d-md-none ${styles.mobile_label}`}>Qty</span>
                <ProductQuantityCounter
                    small
                    qty={data.quantity}
                    onIncreament={() => addToCart(data?.product)}
                    onDecrement={() => decreaseProductQuantityInCart(data?.product)}
                />
            </div>

            {/* Subtotal */}
            <div className="col-4 col-md-2 mt-2 mt-md-0">
                <span className={`d-block d-md-none ${styles.mobile_label}`}>Total</span>
                <span className='fw-bold'>{Helpers.priceFormatter(total_price)}</span>
            </div>

        </div>
    );
};

export default CartProduct;