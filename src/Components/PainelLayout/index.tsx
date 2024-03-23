import { ReactNode } from "react"
import { BodyPainel, Box, HeaderPainel } from "./style"
import {Link} from "react-router-dom"




type Props={
    children:ReactNode
}
export  default ({children}:Props)=>{
    return <Box>
        <HeaderPainel>
             <nav>
                <div className="cx-logo">
                    <img src="/icons/logoloja.png" />
                </div>
               <div className="cx-links">
                  <Link to='/painel/cardapio'>Cardápio</Link>
                  <Link to='/painel/categorias'>Categorias</Link>
                  <Link to='/painel/novoproduto'>Novo Produto</Link>
                 <Link to='/painel/cozinha'>Cozinha</Link>
                 <Link to='/painel/cozinha'>Entregadores</Link>
                 <Link to='/painel/vendas'>vendas</Link>
                 <Link to='/painel/configuracoes'>Configurações</Link>
               </div>
             </nav>
        </HeaderPainel>
        <BodyPainel>
            {children}
        </BodyPainel>
    </Box>

}