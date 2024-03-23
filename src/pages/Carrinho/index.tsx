
import { Layout } from "../../Components/Layout"
import { Container, ProducttItem } from "./style"
import { useGlobalRedux } from "../../hooks/useRedux"
import { useDispatch } from "react-redux"
import { removeProductCart } from "../../redux/reducers/cart.reducer."
import { clearCart } from "../../redux/reducers/cart.reducer."
import { addRequest } from "../../redux/reducers/request.reducer"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Close from "../../svgs/close"
import Trash from "../../svgs/trash"


export default ()=>{
    const {cart}=useGlobalRedux(state=>state)
    const navigate=useNavigate()
    const dispatch=useDispatch()
   

 let newRequest={
    id:Math.floor(Math.random() * 4556),
    products: cart.productsCart,
    desconto: cart.desconto,
    taxaEntrega: cart.taxaEntrega,
    totalvalue:cart.totalCart,
    state:'Entregue',
    date:'27/07/2023',
    address:{
       id:2,
       rua:'rua generoso pinto',
       cpf:'163479364-00',
       ativo:true,
       bairro:'coneioção do itaguá',
       numero:'222',
       complemento:'em frente ao campo de futebol',
       cidade:'São Paulo',
       estado:'SP'
   }
 }

    const setRequest=()=>{
       if(cart.productsCart.length>0){

        dispatch(addRequest(newRequest))
        navigate("/pedidos")
        setTimeout(()=>{
         dispatch(clearCart())
       },200)
       }else{
        toast.error(('Adicione produtos á sacola'));
        
       }

    }

    return <Layout>
        <Container>
        <h3>Carrinho</h3>
         {
            cart.productsCart.length > 0  ?   <div className="products-list">
                {cart.productsCart?.map((i,k)=>(
                   <ProducttItem>
                        <div className="left">
                            <img src={i.img} alt="" />
                            <p>{i.name}</p>
                        </div>
                        <div className="right">
                            <div className="qdt">
                                <p><span>Qdt </span> {i.qdt}x</p>
                            </div>
                            <div onClick={()=>dispatch(removeProductCart(i.id))} className="close">
                                <Close />
                            </div>
                        </div>
                   </ProducttItem>
                ))}
             </div> : <div className="error-cart">
                   <p>Carrinho vazio</p>
            </div>
         }
        
           <div className="values-cart">
                <span><span className="title">Desconto : </span> R$0,00</span>
                <hr />
                <span><span className="title">taxa entrega : </span> R$0,00</span>
                <hr />
                <span><span className="title">Total : </span> {cart.totalCart.toFixed(2).replace('.',',')}</span>
           </div>
           <div className="cx-btn">
            <button onClick={setRequest} className='finalize'>Finalizar pedido</button>
            {cart.productsCart.length > 0 &&  <button className="clear-cart" onClick={()=>dispatch(clearCart())}>Limpar Sacola</button>}
           </div>
        
         
        </Container>
    </Layout>
    
}