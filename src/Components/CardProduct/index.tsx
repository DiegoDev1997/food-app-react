import { ProductType } from "../../types/produtos"
import { Box,BoxTop,BoxBottom } from "./style"
import { Button } from "../Button"
import { GlobalStyle } from "../../AppStyle"
import { useGlobalContext } from "../../context/context"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/reducers/product.reducer"
import { useLocation, useNavigate } from "react-router-dom"
import Edit from "../../svgs/edit"
import Trash from "../../svgs/trash"


type Props={
    product:ProductType,
    bg:string
}

export const CardProduct=({product}:Props)=>{
    const {handleModal}=useGlobalContext()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const  location=useLocation()

    const setProductId=()=>{
        navigate(`/painel/cardapio/editar-produto/${product.id}`)
        dispatch(addProduct(product))
    }
    const setDataModal=()=>{
       dispatch(addProduct(product))
        handleModal(true)
    }
    return <Box>
        <BoxTop>
            <div className="cx-img">
               <img src={product.img}  alt="" />
            </div>
        </BoxTop>
        <BoxBottom>
            <div className="details">
              <div className="top-details">
                  <h2 className="name-product">{product.name}</h2>
                  <span className='category'>{product.category}</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="finals">
                <span className="price">R${product.price.toFixed(2).replace('.',',')}</span>
                {
                  location.pathname === '/cardapio' && <div className="cx-btn">
                    <Button 
                        onClick={()=>setDataModal()}
                        color="#EEEE"
                        w={'50%'}
                        text="Ver produto"
                        radius="3px"
                        bgh="transparent"
                        colorh={`${GlobalStyle.bgTheme}`}
                        fHeight="bold"
                        p="18px 0"
                        outlineH={`2px solid ${GlobalStyle.bgTheme}`}
                        bg={GlobalStyle.bgTheme}
                        shadowh="0 0 12px #000"
                        />
                 </div>
                }
                {
                  location.pathname ==='/painel/cardapio' && <div className="actions-btn">
                    <button onClick={setProductId}>
                        <Edit />
                    </button>
                    <button >
                        <Trash />
                    </button>
                  </div>
                }
            </div>
        </BoxBottom>
    </Box>
}