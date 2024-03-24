import { ReactNode, useEffect } from "react"
import { BodyPainel, Box, HeaderPainel } from "./style"
import {Link} from "react-router-dom"
import { PainelAdminLinks } from "../../utils/menu_links"
import Cardapio from "../../svgs/cardapio"
import Categoria from "../../svgs/categoria"
import Loja from "../../svgs/loja"
import Cozinha from "../../svgs/cozinha"
import Vendas from "../../svgs/vendas"
import Add from "../../svgs/add"




type Props={
    children:ReactNode
}
export  default ({children}:Props)=>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return <Box>
        <HeaderPainel>
             <nav>
                <div className="cx-logo">
                    <img src="/icons/logoloja.png" />
                </div>
               <div className="cx-links">
                 {
                    PainelAdminLinks.map((l,k)=><Link to={l.path}>
                        {l.name === 'Cardapio'  && <Cardapio />}
                        {l.name === 'Categorias'  && <Categoria />}
                        {l.name === 'Minha Loja'  && <Loja />}
                        {l.name === 'Cozinha'  && <Cozinha />}
                        {l.name === 'Vendas'  && <Vendas />}
                        {l.name === 'Novo Produto'  && <Add />}
                         {l.name}</Link>)
                 }
               </div>
             </nav>
        </HeaderPainel>
        <BodyPainel>
            {children}
        </BodyPainel>
    </Box>

}