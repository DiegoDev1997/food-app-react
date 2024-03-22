import { Layout } from "../../Components/Layout"
import { Box } from "./style"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import {Link} from "react-router-dom"


export default ()=>{
    return <Layout>
        <Box>
            <form action="">
                <h3>Cadastro</h3>
                <p>Preecha com seus dados para criar a sua conta:</p>
                <div className="cx-inputs">
                <Input w="100%" type="text" placeholder="Digite seu nome completo" 
                       size={18} 
                       p={'32px 12px'} m='12px 0' 
                  />
                  <Input w="100%" type="email" placeholder="Digite seu email" 
                       size={18} 
                       p={'32px 12px'} m='12px 0' 
                  />
                   <Input w="100%" type="tel" placeholder="Digite seu telefone" 
                       size={18} 
                       p={'32px 12px'} m='12px 0' 
                  />
                   <Input w="100%" type="email" placeholder="Digite seu RG" 
                       size={18} 
                       p={'32px 12px'} m='12px 0' 
                  />
                   <Input w="100%" type="email" placeholder="Digite seu CPF" 
                       size={18} 
                       p={'32px 12px'} m='12px 0' 
                  />
                  <Input w="100%" type="password" placeholder="Digite sua senha" 
                        size={18} p={'32px 12px'} 
                  />
                </div>
                <div className="cx-btn">
                  <Button bg="#2CD3E1" size={16} radius="3px" bgh="#1D267D" 
                      shadowh="0 0 5px #000"  text='Finalizar' color="#FFF" p="22px 32px" 
                       w={'30%'} m="32px 0"
                  />
                </div>
                <hr />
                <div className="line">
                  <p>Já tem uma conta?<Link to='/entrar'>Clique qui</Link></p>
                </div>
            </form>
         
        </Box>
    </Layout>
    
}