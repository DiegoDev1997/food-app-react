import { useGlobalContext } from "../../context/context"
import { Box } from "./style"
import { useEffect, useState } from "react"
import { Button } from "../Button"
import {useDispatch} from 'react-redux'
import { addProductCart } from "../../redux/reducers/cart.reducer."
import { toast } from "react-toastify"
import Close from "../../svgs/close"
import { useGlobalRedux } from "../../hooks/useRedux"




export const ModalProduct=()=>{
    const dispatch=useDispatch()
    const {user,stateModal,handleModal}=useGlobalContext()
    const {product,cart}=useGlobalRedux(state=>state)
    let  [priceModal,setPriceModal]=useState(product.price)
    let  [qdtModal,setQdtModal]=useState<number>(1)


    useEffect(()=>{
        //setPriceModal(product.price)
        setQdtModal(1)
    },[stateModal])


    const addQdt=()=>{
       if(qdtModal < 10){
        setQdtModal(qdtModal+=1)
        setPriceModal(priceModal=>priceModal + product.price)
       }
    }
    const minusQdt=()=>{
       if(qdtModal > 1){
         setQdtModal(qdtModal-1)
         setPriceModal(price=>price - product.price)
       }
       
    }



    

    const setProductToCart=()=>{
       if(user){
            dispatch(addProductCart({
                ...product,
                qdt:qdtModal,
                price:priceModal
            }))
            handleModal(false)
       }else{
        toast.error('Ops!Você não tem uma conta')
       }
    }



    return <Box qdt={qdtModal} onClick={()=>null}>
        <div className="left">
            <div className="head-left">
                <button  onClick={()=>handleModal(false)}>
                    <img src="/icons/set-left.png" alt="" />
                </button>
                <button>
                    <img src="/icons/favorite.png" alt="" />
                </button>
            </div>
           <div  className="cx-img">
             <img src={product.img} alt="" />
           </div>
        </div>
        <div className="right">
           <button onClick={()=>handleModal(false)} className="btn-close">
             <Close />
           </button>
           <div className="details-product">
              <h3>{product.name}</h3>
              <span className="category">{product.category}</span>
           </div>
           <div className="details-two">
                {product.ingredientes &&  <div className="ingredientes">
                     {product.ingredientes}
                   </div>
                }
               {product.desc &&  <div className="description">
                  {product.desc}
               </div>}
               <div className="cx-qdt">
                    <p>Selecione uma quantidade:</p>
                    <div className="counter">
                        <span className="action " onClick={minusQdt}>-</span>
                        <span className="qdt">{qdtModal}</span>
                        <span className="action " onClick={addQdt}>+</span>
                    </div>
              </div>

                <div className="divider"></div>
                <div className="price">R${priceModal?.toFixed(2).replace('.',',')}</div>
           </div>
          
           <div className="cx-btn">
               <Button  
                 shadowh="0 0 6px #aaa"
                  bg="#387ADF"
                  color="white"
                  w={'50%'}
                  p="18px 32px"
                  radius="5px"
                  onClick={setProductToCart}
                  text="adicionar á sacola"
                  bgh="#1D24CA"
                  size={17}
               />
           </div>
        </div>

    </Box>
}