import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addProductIntoCart, decreaseProductIntoCart, removeAllProducts, removeProductFromCard } from '../redux/features/cart-slice';
import { useNavigate } from 'react-router';


export const useShoppingCart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products) ?? []
    const isLogin = useSelector(state => state.user.isLogin);

    function addToCart(p) {

        if (!p) return;
        if (!isLogin) {
            navigate("/auth/signup");
            return;
        }
        dispatch(addProductIntoCart(p));
    }

    function decreaseProductQuantityInCart(p) {
        if (!p) return;
        dispatch(decreaseProductIntoCart(p));
    }

    function removeFromCart(p) {
        if (!p) return;
        dispatch(removeProductFromCard(p));
    }

    function clearCart() {
        dispatch(removeAllProducts());
    }

    function getCartCount() {
        return products.reduce((acc, item) => acc += item.quantity, 0);
    }

    function getCartProducts() {
        return products;
    }

    function getCartProductQuantity(id) {
        if (!id) return;
        return products.find(item => item.product_id === id)?.quantity
    }

    function getCartSingleProducts(id) {
        if (!id) return;
        return products.find(item => item.product_id === id);
    }


    return { addToCart, decreaseProductQuantityInCart, removeFromCart, getCartCount, getCartProducts, getCartProductQuantity, getCartSingleProducts, clearCart }
}

export default useShoppingCart