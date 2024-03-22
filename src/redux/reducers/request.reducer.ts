import { RequestType } from "../../types/pedidos";
import { ProductType } from "../../types/produtos";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type ChangeStatusType={
    id:number,
    newStatus:string
}
export const Request=createSlice({
    name:'request',
    initialState:[] as RequestType[],
    reducers:{
        addRequest:(state,action:PayloadAction<RequestType>)=>{
             state.unshift(action.payload)
             return state
        },
        removerRequest:(state,action:PayloadAction<number>)=>{
            state=state.filter(i=>i.id !== action.payload)
            return state
        },
        clearRequests:(state)=>{
            state=[]
            return state
        }
    }
})

export const {addRequest,removerRequest}=Request.actions
export default Request.reducer