import { Layout } from "../../Components/Layout"
import { Container } from "./style"
import { useEffect, useState } from "react"
import { CardRequest } from "../../Components/CardRequest"
import { useGlobalRedux } from "../../hooks/useRedux"
import { RequestType } from "../../types/pedidos"

export default ()=>{
    const {request}=useGlobalRedux(state=>state)
    const [pedidos,setPedido]=useState<RequestType[]>(request)

    useEffect(()=>{
        setPedido(request)
    },[request])

    return <Layout>
        <Container>
            <div className="header-page">
                <h2>Pedidos</h2>
                <p>Acompanhe aui os seus pedidos😁</p>
             
            </div>
            <div className="container-requests">
                {pedidos.map((i,k)=>(
                        <CardRequest request={i} key={k} />
                    ))  
                }
            </div>
        </Container>
    </Layout>
    
}