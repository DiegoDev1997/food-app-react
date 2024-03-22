import {Route,Routes as Router} from "react-router-dom"
import Home from "../pages/Home"
import Cardapio from "../pages/Cardapio"
import ProdutoId from "../pages/ProdutoId"
import Pedidos from "../pages/Pedidos"
import Carrinho from "../pages/Carrinho"
import Login from "../pages/login"
import Registro from "../pages/registro"


export const Routes=()=>{
    return  <Router>
           <Route  path="/" element={<Home />}  />
           <Route  path="/entrar" element={<Login/>}  />
           <Route  path="/cadastro" element={<Registro />}  />
           <Route  path="/cardapio" element={<Cardapio />}  />
           <Route  path="/cardapio/:id" element={<ProdutoId />}  />
           <Route  path="/pedidos" element={<Pedidos />}  />
           <Route  path="/carrinho" element={<Carrinho />}  />
         
         </Router>
    

}