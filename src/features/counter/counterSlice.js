import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData, fetchProduct } from './MicroAPI';
import { productsArray } from '../../app/products';


const initialState ={
  status : 'get',
  product:[],
  initProduct:{},
  addToBag: 0,
  enable : 'enable'
}

export const productAsync = createAsyncThunk(
   'counter/fetchCount',
   async () => {
       const response = await fetchData();
       
       return response.data.results  ;
   }
   );






export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
   
  
    initProduct: (state,action) => {
      state.initProduct = action.payload;
    },
    damnProduct: (state,action) => {
      state.product = action.payload;
    },
    addBag: (state)=>{
      state.addToBag += 1
    }
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(productAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productAsync.fulfilled, (state, action) => {
        state.status = 'get';
        state.product = action.payload;
      })
     
  },
});

export const dis = ()=> {
  return (dispatch,getState)=>{
        const stateBefore = getState()
        dispatch(productAsync)
  }
}




export const { initProduct, damnProduct, addBag  } = productSlice.actions;

export const products = (state) => state.products.product;
export const selProduct = (state) => state.products.initProduct
export const addProduct = (state) => state.products.addToBag





export default productSlice.reducer;
