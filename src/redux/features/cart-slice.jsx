import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductIntoCart: (state, action) => {
            const productExit = state.products.find(item => item.product_id === action.payload.id)
            if (productExit) {
                productExit.quantity++;
            } else {
                state.products.push({          
                    quantity: 1,
                    product_id: action.payload.id,
                    product: action.payload
                });
            }
        },
        decreaseProductIntoCart: (state, action) => {
            const productExit = state.products.find(item => item.product_id === action.payload.id)
            if (productExit) {
                if (productExit.quantity > 1) {
                    productExit.quantity--;
                } else {
                    state.products = state.products.filter(item => item.product_id !== action.payload.id)
                }
            }
        },
        removeProductFromCard: (state, action) => {
            state.products = state.products.filter(item => item.product_id !== action.payload.id)
        },
        removeAllProducts: (state) => {
            state.products = [];
        }
    }
})

export const { addProductIntoCart, decreaseProductIntoCart, removeProductFromCard, removeAllProducts } = cartSlice.actions
export default cartSlice.reducer