import React from 'react'
import styles from './cards.module.scss'
import p1 from '../../assets/images/p1.png'
import cartIcon from '../../assets/icons/cart-icon.svg'
import { Rating } from 'react-simple-star-rating'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import useShoppingCart from '../../hooks/use-shopping-cart'
import { SingleProduct } from '../../services/single-data'
import { BsDatabaseDown } from 'react-icons/bs'
import { Helpers } from '../../services/helpers'


export const ProductCard = ({ data }) => {
    const { addToCart } = useShoppingCart()
    const isLogin = useSelector(state => state.user.isLogin)
    const navigate = useNavigate();
    console.log(data)
    return (
        <div className={`${styles.product_card_container}`} onClick={() => navigate('/product-info')}>
            <div className={`${styles.card_img_container}`}>
                <img src={data?.img[0]} alt={data?.name} />
            </div>
            <div className={`${styles.card_content}`}>
                <div className={`${styles.card_details}`}>
                    <h6>{data?.name}</h6>
                    <img onClick={(e) => {
                        e.stopPropagation();
                        (isLogin ? addToCart(data) : navigate("auth/signup"))
                    }} src={cartIcon} alt="" />
                </div>
                <p>Price:{Helpers.priceFormatter(data?.price)}</p>
                <Rating
                    initialValue={parseFloat(data?.rating)}
                    readonly={true}
                    allowFraction={true}
                    size={20}
                />
            </div>
        </div >

    )
}

export default ProductCard