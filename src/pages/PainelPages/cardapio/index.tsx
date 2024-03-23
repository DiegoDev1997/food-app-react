import PainelLayout from "../../../Components/PainelLayout"
import { CardProduct } from "../../../Components/CardProduct"
import { Container, TableCardapio, ToogleView } from "./style"
import { useState } from "react"
import { productsList } from "../../../data/product"
import {Link } from "react-router-dom"
import Edit from "../../../svgs/edit"
import Trash from "../../../svgs/trash"
import { useRef ,useEffect} from "react"


export const CardapioP=()=>{
    const [products,setProducts]=useState(productsList)
    const [activeView,setActiveView]=useState('table')
    const activeToogle=useRef<HTMLSpanElement>(null)
    const [tableView,setTableView]=useState(true)

useEffect(()=>{
    if(activeView === 'table'){
        setTableView(true)
    }else{
        setTableView(false)
    }
},[activeView])


    return <PainelLayout>
        <Container >
            <>
            <div className="top-page">
                <h3>Cardápio</h3>
                <ToogleView active ={activeView}>
                    <span onClick={()=>setActiveView('card')} ref={activeToogle} className='one'>ver como cards</span>
                    <span onClick={()=>setActiveView('table')}  ref={activeToogle} className='two' >ver como tabela</span>
                </ToogleView>
            </div>
            {
                !tableView && <div className="container-products">
                    { products.map((i,k)=>(
                        <CardProduct bg=' ' key={k}  product={i} />
                    ))
                    }
               </div>
            }
            {
                tableView &&   <TableCardapio>
                     <thead>
                        <tr>
                            <td>imagem</td>
                            <td>nome</td>
                            <td>categoria</td>
                            <td>preço</td>
                            <td>ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((i,k)=>(
                            <tr key={k}>
                                 <td> <img src={i.img}  alt="" /></td>
                                  <td>{i.name}</td>
                                  <td>{i.category}</td>
                                  <td>{i.price}</td>
                                  <td className="actions">
                                    <Link to={`/painel/cardapio/editar-produto/${i.id}`}><Edit /></Link>
                                    <span><Trash /></span>
                                  </td>
                            </tr>
                        ))}
                    </tbody>
                </TableCardapio>
              }
            </>
        </Container>
    </PainelLayout>
    
}