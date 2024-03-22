import { useState } from "react"
import { productsList } from "../../data/product"
import { useGlobalContext } from "../../context/context"
import { Container } from "./style"
import { CardProduct } from "../../Components/CardProduct"
import { Input } from "../../Components/Input"
import Search from "../../svgs/search"
import { ModalProduct } from "../../Components/ModalProduct"
import { Modal } from "../../Components/Modal"



export default ()=>{

    const {user,handleModal,stateModal}=useGlobalContext()
    const [products,setproducts]=useState(productsList)

    

    return  <Container >
    <>
    <div className="welcome-user">
    {user?.name &&  <h3> Bem vindo {user?.name}👋</h3>}

        <div className="search">
            <label htmlFor="">O que você quer comer hoje ? 😋</label>
           <div className="cx-input">
            <Input  type="text" p={'25px'} placeholder="Busca"/>
            <Search />
           </div>
        </div>
    </div>
    <div className="container-products">
      {
        products.map((i,k)=>(
            <CardProduct bg='' key={k}  product={i} />
        ))
      }
    </div>
    <Modal>
      <ModalProduct />
    </Modal>
    </>
</Container>
}