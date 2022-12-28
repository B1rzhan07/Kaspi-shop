import { createSlice } from '@reduxjs/toolkit';
import arr from '../../placeholder.json';
const initialState = {
    products: [],
    idCategory: 0,
    bucket: [],
}
const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
        setProducts: (state, action) => {
            state.products = arr;

        },
        setIdCategory: (state, action) => {
            state.idCategory = action.payload;
        },
        setBucket: (state, action) => {
            state.bucket.push(action.payload);
        },
        deleteBucket: (state, action) => {
            state.bucket = state.bucket.filter(item => item.id !== action.payload);
        }





    }
});
export const { setProducts, setIdCategory, setBucket, deleteBucket } = productSlice.actions;
export default productSlice.reducer;