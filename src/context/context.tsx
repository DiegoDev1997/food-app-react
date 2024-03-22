import { RequestType } from "../types/pedidos"
import { createContext, useState,ReactNode, useContext } from "react"

type UserType={
    id:number,
    name:string,
    lastName:string,
    email:string,
    password:string,
    photo?:string,
    tel:string,
    rg:string,
    cpf:string
}

type Props={
    children:ReactNode
}
type ContextType={
    user:UserType | null,
    stateModal:boolean ,
    setUser:(user:UserType)=>void,
    shareRequest:RequestType,
    setShareRequest:(request:RequestType)=>void,
    handleModal:(state:boolean)=>void,
    stateMobileMenu:boolean 
    handleStateMobileMenu:(state:boolean)=>void
}
export const  context=createContext<ContextType>({
    user:{} as UserType || null,
    setUser:(user:UserType)=>{},
    stateModal:false,
    handleModal:(state:boolean)=>{},
    shareRequest:{} as RequestType,
    setShareRequest:(request:RequestType)=>{},
    stateMobileMenu:false, 
    handleStateMobileMenu:(state:boolean)=>{}
})


export const ContextProvider=({children}:Props)=>{
    const [stateMobileMenu,handleStateMobileMenu]=useState(false)
    const [stateModal,handleModal]=useState(false)
    const [shareRequest,setShareRequest]=useState({} as RequestType)
    const [user,setUser]=useState<UserType | null>({
        id:1,
        name:'Diego',
        lastName:'Dutra Morais',
        email:'diegodev@gmail.com',
        password:'rrrerre',
        photo:'data:image/jpeg;base64,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',
        tel:'31996720550',
        rg:'12.551.008-1',
        cpf:'672.533.188-20'
    })

    /*
   {
        id:1,
        name:'Diego',
        lastName:'Dutra Morais',
        email:'diegodev@gmail.com',
        password:'rrrerre',
        photo:'',
        tel:'31996720550',
        rg:'12.551.008-1',
        cpf:'672.533.188-20'
    }
    */
    let value={stateMobileMenu,handleStateMobileMenu,user,stateModal,handleModal,shareRequest,setShareRequest,setUser}
    return <context.Provider value={value}>
      {children}
    </context.Provider>
}


export const useGlobalContext=()=>useContext(context)