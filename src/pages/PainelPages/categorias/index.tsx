import PainelLayout from "../../../Components/PainelLayout"
import { NewCategory, Page, TableCategorias } from "./style"
import categorias from "../../../data/categorias"
import { useState } from "react"
import {Link} from "react-router-dom"
import Trash from "../../../svgs/trash"
import { Input } from "../../../Components/Input"
import { Button } from "../../../Components/Button"
import { GlobalStyle } from "../../../AppStyle"



export const CategoriasP=()=>{
    const [categorysList,setCategorysList]=useState<{id:number,name:string}[] | null>(categorias)
    const [addCategory,setAddCategory]=useState(false)

    return <PainelLayout>
     <Page>
        <div className="header-page">
          <h2>Categorias</h2>
          {
            !addCategory && <Button 
                onClick={()=>setAddCategory(true)}
                color="#EEEE"
                w='auto'
                text="adicionar nova categoria"
                radius="3px"
                m="0 12px"
                bgh="transparent"
                colorh={`${GlobalStyle.bgTheme}`}
                fHeight="bold"
                    outlineH={`2px solid ${GlobalStyle.bgTheme}`}
                bg={GlobalStyle.bgTheme}
                shadowh="0 0 12px #000"
           />
          }
        </div>

        {
            addCategory && <NewCategory>
                <div className="content">
                <h4>Adicione uma nova categoria</h4>
                    <div>
                        <Input w='390px' p='22px' />
                        <Button 
                                onClick={()=>{}}
                                color="#EEEE"
                                w={'160px'}
                                text="adicionar"
                                radius="3px"
                                m="0 12px"
                                bgh="transparent"
                                colorh={`${GlobalStyle.bgTheme}`}
                                fHeight="bold"
                                outlineH={`2px solid ${GlobalStyle.bgTheme}`}
                                bg={GlobalStyle.bgTheme}
                                shadowh="0 0 12px #000"
                         />
                            <Button 
                                onClick={()=>setAddCategory(false)}
                                color="#EEEE"
                                w={'160px'}
                                text="fechar"
                                radius="3px"
                                m="0 12px"
                                bgh="transparent"
                                colorh={`${GlobalStyle.bgTheme}`}
                                fHeight="bold"
                                outlineH={`2px solid ${GlobalStyle.bgTheme}`}
                                bg={GlobalStyle.bgTheme}
                                shadowh="0 0 12px #000"
                           />
                    </div>
                </div>
            </NewCategory>
        }
       <TableCategorias>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>nome</td>
                        <td>qdt_Produtos</td>
                        <td>ações</td>
                    </tr>
                </thead>
                {
               <tbody>
                  
                   {
                      categorysList?.map((c,k)=>(
                            <tr key={k}>
                             <td key={k}>{c.id}</td>
                            <td key={k}>{c.name}</td>
                            <td key={k}>{c.name}</td>
                            <td className="actions">
                               <Link to={`/painel/categorias/${c.name}`} >ver produtos</Link>
                               <span><Trash/></span>
                            </td>
                            </tr>
                       
                     ))
                    }
                   
               </tbody> 
            }
       </TableCategorias>
     </Page>
    </PainelLayout>
}