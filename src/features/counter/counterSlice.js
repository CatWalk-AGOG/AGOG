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
       // The value we return becomes the `fulfilled` action payload
       
       return response.data.results  ;
   }
   );






export const productSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
   
  
    initProduct: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.initProduct = action.payload;
    },
    damnProduct: (state,action) => {
      state.product = action.payload;
    },
    
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




export const { initProduct, damnProduct } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const products = (state) => state.products.product;
export const selProduct = (state) => state.products.initProduct



// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default productSlice.reducer;
