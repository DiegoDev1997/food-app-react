import { Box } from "./style"
import { RequestType } from "../../types/pedidos"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { removerRequest } from "../../redux/reducers/request.reducer"
import Arrow from "../../svgs/arrow"
import Close from "../../svgs/close"
import Trash from "../../svgs/trash"


type Props={
    request:RequestType
}

export const CardRequest=({request}:Props)=>{
    const [onDetails,setDetails]=useState(false)
    const dispacth=useDispatch()



    return <Box onDetails={onDetails}>
            <div className="top">
                <span className="state" >{request.state}</span>
                <span className="btn" onClick={()=>onDetails ? setDetails(false):setDetails(true)}>
                     {onDetails ? <Close /> : <Arrow />} 
                </span>
            </div>
            <div className="bottom">
                <div className="products">
                    <div className="products-list-request">
                        {request.products.map((i,k)=>(
                            <div key={k} className="products-request">
                                <div className="content">
                                    <div className="details">
                                        <div className="details-product">
                                            <img src={i.img} alt="" />
                                            <span className="name">{i.name}</span>
                                        </div>
                                        <div className="qdt">{i.qdt}x</div>
                                    </div>
                                </div>
                              <hr />
                            </div>
                           
                        ))}
                        
                    </div>
                </div>
                <div className="address">
                  <div className="content">
                    <div>Rua :<span>{request.address.rua}</span></div>
                    <div>Bairro :<span>{request.address.bairro}</span></div>
                    <div>N° :<span>{request.address.numero}</span></div>
                    <div>Cidade/Estado:<span>{request.address.cidade}-{request.address.estado}</span></div>
                  </div>
                </div>
                <div className="info-request">
                <div className="content">
                    <div>Desconto :R$ <span>{request.desconto.toFixed(2).replace('.',',')}</span></div>
                    <div>Taxa de Entrega :<span>{request.taxaEntrega.toFixed(2).replace('.',',')}</span></div>
                    <div>Total:<span>{request.totalvalue.toFixed(2).replace('.',',')}</span></div>
                  </div>
                </div>
            </div>
           {
            request.state == 'Entregue' &&  <div className="excluse">
                <a onClick={()=>dispacth(removerRequest(request.id))}><Trash /></a>
            </div>
           }
    
    </Box>
}