import { ProductType } from "../../types/produtos";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export const Product=createSlice({
    name:'product',
    initialState:{} as ProductType  ,
    reducers:{
        addProduct:(state,action:PayloadAction<ProductType>)=>{
            state=action.payload
            return state
        },
        removerProduct:(state,)=>{
            state={} as ProductType
            return state
        }
    }
})

export const {addProduct,removerProduct}=Product.actions
export default Product.reducer