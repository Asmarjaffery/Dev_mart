import React from 'react'
import styles from './cards.module.scss'
import p1 from '../../assets/images/p1.png'
import cartIcon from '../../assets/icons/cart-icon.svg'
import { Rating } from 'react-simple-star-rating'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


export const ProductCard = ({ data }) => {
    const isLogin = useSelector(state => state.user.isLogin)
    const navigate =useNavigate();
    return (
        <div className={`${styles.product_card_container}`}>
            <div className={`${styles.card_img_container}`}>
                <img src={data?.img[0]} alt={data?.name} />
            </div>
            <div className={`${styles.card_content}`}>
                <div className={`${styles.card_details}`}>
                    <h6>{data?.name}</h6>
                    <img onClick={()=>(isLogin?alert("add to cart"):navigate("auth/signup"))} src={cartIcon} alt="" />
                </div>
                <p>Price:${data?.price}</p>
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