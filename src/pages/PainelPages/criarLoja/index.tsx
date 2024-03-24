import { Button } from "../../../Components/Button"
import { Input } from "../../../Components/Input"
import PainelLayout from "../../../Components/PainelLayout"
import { TextArea } from "../../../Components/TextArea"
import { Container } from "./style"

export const CriarLoja= ()=>{
    return <PainelLayout>
      <Container>
          <h3>Criar Loja</h3>
          <p>Edite aqui informaões do seu produto:</p>
          <form action="" encType="multipart/form-data" >
          
          <div className="left">
              <img src='' />
          </div>
          <div className="right">
              <div className="cx-input">
                <label htmlFor="Nome">Nome</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
              </div>
              <div className="cx-input">
                <label htmlFor="Nome">Rua</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
              </div>
              <div className="cx-input">
                <label htmlFor="Nome">Cidade</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
               </div>
              
               <div className="cx-input">
                <label htmlFor="Nome">Estado</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
               </div>
               <div className="cx-input">
                <label htmlFor="Nome">CEP</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
               </div>
               <div className="cx-input">
                <label htmlFor="Nome">Sobre</label>
                <TextArea>
                    
                </TextArea>
               </div>
               
               <div className="cx-btn">
                <Button text="Adicionar produto" type='submit' m="30px 0"  bg="#008DDA" p="27px" bgh="#1640D6" radius="9px" w={'50%'}
                />
               </div>
          </div>
      
          </form>
        </Container>
    </PainelLayout>
}