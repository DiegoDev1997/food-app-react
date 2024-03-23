
import { Box } from "./style"
import { RequestType } from "../../types/pedidos"
import { ChangeEvent, useState } from "react"
import {useDispatch} from 'react-redux'
import { useGlobalContext } from "../../context/context"





type Props={
    request:RequestType,
    onChangeStatus:(id:number,status:string)=>void
}

export const CardRequestAdmin=({request,onChangeStatus}:Props)=>{
    const [onDetails,setDetails]=useState(false)
    const dispatch=useDispatch()
    const {setShareRequest}=useGlobalContext()


const setRequestToPrint=()=>{
   setShareRequest(request)
   setTimeout(()=>{
    if(window.print){
        window.print()
    }
   },200)
   
}

const conditionBg=()=>{
    if(request.state == 'Preparando'){
        return '#1B9C85'
    }else if(request.state == 'Enviado'){
        return '#212A3E'
    }else{
        return '#454545'
    }
}
const conditionBgState=()=>{
    if(request.state == 'Preparando'){
        return '#205b50'
    }else if(request.state == 'Enviado'){
        return '#11192a'
    }else{
        return '#191919'
    }
}

const ChangeStatusRequest=(item:RequestType,status:string)=>{
    
}

const handleStatusRequest=(e:ChangeEvent<HTMLSelectElement>)=>{
    onChangeStatus(request.id,e.target.value as string)



}

    return <Box bgState={conditionBgState()} bg={conditionBg()} onDetails={onDetails}>
            <div className="top">
                <span className="state" >{request.state}</span>
                <span className="btn" onClick={()=>onDetails ? setDetails(false):setDetails(true)}>
                    <img src={onDetails ? '/icons/close.png': '/icons/setbaixo.png'} alt="" />
                </span>
            </div>
            <div className="info-user">
               <div className="user-name">Diego Dutra</div>
               <div className="info-tel">1197234455</div>
               <div className="info-code">#4546</div>
            </div>
            <div className="info-state">
                <select name="" id="" onChange={handleStatusRequest} value={request.state}> 
                    <option value="Fazendo">Fazendo</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Entregue">Entregue</option>
                </select>
            </div>
            <div className="bottom">
                <div className="products">
                    <div className="products-list-request">
                        {request.products.map((i,k)=>(
                            <div className="products-request">
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
                    <div>Desconto :R$ <span>{request.desconto.toFixed(2).replaceAll('.',',')}</span></div>
                    <div>Taxa de Entrega :<span>{request.taxaEntrega.toFixed(2).replaceAll('.',',')}</span></div>
                    <div>Data do pedido:<span>{request.date}</span></div>
                    <div>Hora do pedido:<span>{request.date}</span></div>
                    <div>Total:<span>{request.totalvalue.toFixed(2).replaceAll('.',',')}</span></div>
                  </div>
                </div>
                <div className="cx-actions">
                    <button onClick={setRequestToPrint}>Imprimir nota</button>
                </div>


            </div>
    
    </Box>
}