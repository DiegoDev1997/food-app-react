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
import { CategoriasP } from "../pages/PainelPages/categorias"
import { ProdutosdeCategoriaId } from "../pages/PainelPages/produtosdeCategoriaId"
import { NovoProdutoP } from "../pages/PainelPages/novoproduto"



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
           <Route  path="/painel/categorias" element={<CategoriasP />}  />
           <Route  path="/painel/categorias/:category" element={<ProdutosdeCategoriaId />}  />
           <Route  path="/painel/novoproduto" element={<NovoProdutoP />}  />
         </Router>
    

}