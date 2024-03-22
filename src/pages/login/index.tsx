import { Layout } from "../../Components/Layout"
import { Box } from "./style"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import {Link} from "react-router-dom"


export default ()=>{
    return <Layout>
        <Box>
          <div className="left">
            <form action="">
                <h3>Entrar</h3>
                <p>Preecha com seus dados para entrar na sua conta:</p>
                <div className="cx-inputs">
                  <Input w="100%" type="email" placeholder="Digite seu email" 
                       size={18} 
                       p={'32px 12px'} m='12px 0' 
                  />
                  <Input w="100%" type="password" placeholder="Digite sua senha" 
                        size={18} p={'32px 12px'} 
                  />
                  <div className="google">
                    <img src="/icons/googlelogo.png" alt="" />
                    <a href="" >Entrar com sua conta Google</a>
                  </div>
                </div>
                <div className="cx-btn">
                  <Button bg="#2CD3E1" size={16} radius="3px" bgh="#1D267D" 
                      shadowh="0 0 5px #000"  text='Entrar' color="#FFF" p="22px 32px" 
                       w={'50%'} m="32px 0"
                  />
                </div>
                <hr />
                <div className="line">
                  <p>Esqueceu a senha?<Link to='/cadastro'>Clique qui</Link></p>
                </div>
            </form>
          </div>
          <div className="right"> </div>
        </Box>
    </Layout>
    
}