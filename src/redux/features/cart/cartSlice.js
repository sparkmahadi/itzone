import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchOrders, postOrder } from "./cartAPI";

const initialState = {
    cart: [],
    orders: [],
    isLoading: false,
    isError: false,
    error: ""
};

export const getOrders = createAsyncThunk("orders/getOrders", async (mobile) => {
    const order = fetchOrders(mobile);
    return order;
});

export const placeOrder = createAsyncThunk("orders/placeOrder", async (data) => {
    const order = postOrder(data);
    return order;
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const selectedProduct = state.cart.find(product => product._id === action.payload._id);
            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1 };
                state.cart.push(product);
            } else {
                selectedProduct.quantity += 1;

                state.cart
                    .filter(product => product._id !== selectedProduct._id)
                    .push(selectedProduct)
            }
        },

        removeFromCart: (state, action) => {
            if (action.payload.quantity > 1) {
                const modifiedProduct = {
                    ...action.payload, quantity: action.payload.quantity - 1
                };
                state.cart = state.cart.filter(product => product._id !== action.payload._id);
                state.cart.push(modifiedProduct);
            } else {
                state.cart = state.cart.filter(product => product._id !== action.payload._id)
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.isLoading = false;
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.orders = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })


            .addCase(placeOrder.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.orders.push(action.payload);
                state.isLoading = false;
                state.error = "";
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.orders = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;