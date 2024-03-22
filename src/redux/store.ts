import { configureStore } from '@reduxjs/toolkit';
import  CartReducer from './reducers/cart.reducer.';
import ProductReducer from './reducers/product.reducer'
import RequestReducer from './reducers/request.reducer';


const store = configureStore({
  reducer: {
    cart: CartReducer,
    product:ProductReducer,
    request:RequestReducer
  },
});

export default store;
export type RootState=ReturnType<typeof store.getState>