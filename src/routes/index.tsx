import {Route,Routes as Router} from "react-router-dom"
import Home from "../pages/Home"
import Cardapio from "../pages/Cardapio"
import ProdutoId from "../pages/ProdutoId"
import Pedidos from "../pages/Pedidos"
import Carrinho from "../pages/Carrinho"
import Login from "../pages/login"
import Registro from "../pages/registro"
import Conta from "../pages/Conta"
import { CardapioP } from "../pages/PainelPages/cardapio"
import { EditarProdutoId } from "../pages/PainelPages/editarproduto"



export const Routes=()=>{
    return  <Router>
           <Route  path="/" element={<Home />}  />
           <Route  path="/entrar" element={<Login/>}  />
           <Route  path="/cadastro" element={<Registro />}  />
           <Route  path="/cardapio" element={<Cardapio />}  />
           <Route  path="/cardapio/:id" element={<ProdutoId />}  />
           <Route  path="/pedidos" element={<Pedidos />}  />
           <Route  path="/conta" element={<Conta />}  />
           <Route  path="/carrinho" element={<Carrinho />}  />
           <Route  path="/painel/cardapio" element={<CardapioP />}  />
           <Route  path="/painel/cardapio/editar-produto/:id" element={<EditarProdutoId />}  />
         </Router>
    

}