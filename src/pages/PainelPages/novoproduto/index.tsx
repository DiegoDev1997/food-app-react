import PainelLayout from "../../../Components/PainelLayout"
import { useGlobalRedux } from "../../../hooks/useRedux"
import { Container } from "./style"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { Input } from "../../../Components/Input"
import { ProductType } from "../../../types/produtos"
import { Button } from "@../../../Components/Button"
import { Select } from "../../../Components/Select"
import { toast } from "react-toastify"
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import categorias from "../../../data/categorias"



export const  Categories=[
   {id:1 ,name:'Hambuguers'},
  {id:2,name:  'Pizzas'},
 {id:3,name:'Bebidas'},
  {id:4,name: 'Doces'},
]

type FormValues={
    name: string;
    price: number;
    category: string;
    img:FileList;
    ingredientes?: string ,


}
    
const schema = yup.object().shape({
    img: yup.string().required('Por favor, faça o upload da imagem'),
    name: yup.string().required('Por favor, insira o nome do produto '),
    price: yup.number().required('Por favor, insira o preço do produto '),
    ingredientes: yup.string().required('Por favor, insira o que vem no  produto '),
    category: yup.string().required('Por favor, selecione a categoria do produto '),
  });


export const NovoProdutoP=()=>{
    const [imgUrl,setImageUrl]=useState(null)

  


    return <PainelLayout>
        <Container>
          <h3>Novo Produto</h3>
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
                <label htmlFor="Nome">Preço</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
              </div>
              <div className="cx-input">
                <label htmlFor="Nome">Quantidade por pedido</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
               </div>
               <div className="cx-input">
                <label htmlFor="Nome">Categoria</label>
                <select name="" id="">
                   {Categories.map((c,k)=><option>{c.name}</option>)}
                </select>
               </div>
               <div className="cx-input">
                <label htmlFor="Nome">Marca</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
               </div>
               <div className="cx-input">
                <label htmlFor="Nome">Litros</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
               </div>
               <div className="cx-input">
                <label htmlFor="Nome">Sabor</label>
                <Input type='text' m='12px 0' w='100%' p={'22px'} />
               </div>
          </div>
      
          </form>
        </Container>
    </PainelLayout>
}