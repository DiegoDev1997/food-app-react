import { ProductType } from "../../types/produtos"
import { createSlice} from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

type CartType={
    productsCart:ProductType[],
    desconto:number,
    taxaEntrega:number,
    totalCart:number
}

export const Cart=createSlice({
    name:'cart',
    initialState:{
        productsCart:[] as ProductType[],
        desconto:0,
        taxaEntrega:0,
        totalCart:0
    },
    reducers:{
        addProductCart:(state,action:PayloadAction<ProductType>)=>{
            let productPay=state.productsCart.find(i=>i.id === action.payload.id)
    
           if(productPay){
               productPay.qdt++,
               productPay.price+=action.payload.price
                state.totalCart+=action.payload.price
                
           }else{
                state.productsCart.unshift(action.payload)
                state.totalCart+=action.payload.price
                toast.success('adicionado ao carrinho')
           }
           return state
        },
        removeProductCart:(state,action:PayloadAction<number>)=>{
             let product=state.productsCart.find(i=>i.id === action.payload)
             state.productsCart=state.productsCart.filter(i=>i.id !== action.payload)
             state.totalCart-=product!.price
          
        },
        clearCart:(state)=>{
            state.productsCart=[]
            state.totalCart=0
        }
    }
})

export const {addProductCart,removeProductCart,clearCart}=Cart.actions
export default Cart.reducer