import PainelLayout from "../../../Components/PainelLayout"
import { CardProduct } from "../../../Components/CardProduct"
import { Container, TableCardapio } from "./style"
import { useState } from "react"
import { productsList } from "../../../data/product"
import Edit from "../../../svgs/edit"
import Trash from "../../../svgs/trash"
import { Link } from "react-router-dom"

export const ProdutosdeCategoriaId=()=>{
    const [products,setproducts]=useState(productsList)



    return <PainelLayout>
        <Container >
            <>
            <div className="top-page">
                <h3>Produtos-categoria x</h3>
            </div>
            <div className="container-products">
              {
                products.map((i,k)=>(
                    <CardProduct bg=' ' key={k}  product={i} />
                ))
              }
        
            </div>
            {
                <TableCardapio>
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

