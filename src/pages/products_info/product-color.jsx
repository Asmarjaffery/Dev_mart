import React from 'react'
import { SingleProduct } from '../../services/single-data'
import styles from "./product_info.module.scss"


export const ProductColorVaraints = ({ colorsList, onChangeColor, activeColor }) => {
    function handleColorChange(c){
        onChangeColor(c)

    }
    return (
        <>
            {
                SingleProduct.color.map((color, i) => <div
                onClick={()=>handleColorChange(color)}
                className={styles.color_box}
                    style={{
                        backgroundColor: color, border: `3px solid ${activeColor == color? "#000": color}`
                    }}>
                </div>)}
        </>
    )
}

export default ProductColorVaraints

