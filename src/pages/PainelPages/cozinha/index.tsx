import PainelLayout from "../../../Components/PainelLayout"
import {  BoxPrint, Container } from "./style"
import { CardRequestAdmin } from "../../../Components/CardRequestAdmin"
import { useGlobalContext } from "../../../context/context"
import { useGlobalRedux } from "../../../hooks/useRedux"
import { RequestType } from "../../../types/pedidos"
import { PedidosList } from "../../../data/pedidos"
import { useState } from "react"


export const Cozinha=()=>{
    const {request}=useGlobalRedux(state=>state)
    const {shareRequest}=useGlobalContext()
    const [pedidos,setPedidos]=useState<RequestType[]>(PedidosList)


  
const ChangeStatusSelect=(id:number,newstatus:string)=>{
//faço a requisição
}


    return <PainelLayout>
        <>
        <Container >
            <div className="top-page">
                <h3>Cozinha</h3>
                <p>Acompanhe aqui os pedidos feitos pelo seus clientes:</p>
            </div>
            <div className="cx-requests-painel">
                {pedidos.map((i,k)=>(
                        <CardRequestAdmin onChangeStatus={ChangeStatusSelect}  request={i} key={k} />
                ))}
            </div>
            
        </Container>
        <BoxPrint>
            <div className="header">
              <h2>Nota Fiscal</h2>
            </div>
            <div className="content">
            <div >
                    <h3>Dados do cliente</h3>
                    <div className="info-cliente">
                        <span><span className="title">Nome</span>:Diego</span>
                        <span><span className="title">Telefone</span>:1186353833</span>
                        <span><span className="title">Email</span> :diegodutramorais</span>
                    </div>
                    <hr />
                      <div className="address">
                        <h3>Endereço:</h3>
                        <div className="info-address">
                            <span><span className="title">Rua</span>:{shareRequest.address?.rua}</span>
                            <span><span className="title">Bairro</span>:{shareRequest.address?.bairro}</span>
                            <span><span className="title">N°</span> :{shareRequest.address?.numero}</span>
                            <span><span className="title">Cidade/Estado</span> :{shareRequest.address?.cidade}/{shareRequest.address?.estado}</span>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div className="produtos">
                        <h3>Produtos</h3>
                        {shareRequest.products?.map((p,k) =>(
                           <li> {p.name} - {p.qdt}X</li>
                        ))}
                    </div>
                    <hr/>
                    <div className="resolucao">
                        <h3>Detalhes da Compra</h3>
                       <span><span className="title">Desconto</span>:R${shareRequest.desconto?.toFixed(2).replace('.',',')}</span>
                       <span><span className="title">Taxa de Entrega</span>:R${shareRequest.taxaEntrega?.toFixed(2).replace('.',',')}</span>
                       <span><span className="title">Total</span> :R${shareRequest.totalvalue?.toFixed(2).replace('.',',')}</span>
                    
                    </div>             
            </div>
        </BoxPrint>
        </>
       
       
    </PainelLayout>
}