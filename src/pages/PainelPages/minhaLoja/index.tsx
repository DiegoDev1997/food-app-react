import { useState } from "react"
import PainelLayout from "../../../Components/PainelLayout"
import { Page } from "./style"
import EnderecoIcon  from "../../../svgs/endereco"
import Media from "../../../svgs/media"
import Insta from "../../../svgs/insta"
import Zap from "../../../svgs/zap"
import { Button } from "../../../Components/Button"
import { Link } from "react-router-dom"
import { LojaType } from "../../../types/loja"

export const MinhaLoja=()=>{
    const [company,setCompany]=useState<LojaType | null>(null)

    /*
{
        nome:'LancheBão',
        logo:'',
        cidade:'São Paulo',
        estado:'SP',
        rua:'Marina Gloaria',
        bairro:'Flores',
        numero:123,
        cep:34566,
        instagram:'@lanchebao',
        whatssap:'31996735373'
    }

    */
    return <PainelLayout>
        <Page>
            {company  ?
            <>
               <div className="box-top">
                <div className="logo-name">
                        <img src={company.logo} alt="" />
                        <h2>{company?.nome}</h2>
                    </div>
                <div className="box-edit">
                    <Button text="Editar" radius="8px" w={'120px'} p="22px 33px" bg="#387ADF"  bgh="#0B60B0"/>
                </div>
               </div>

                <div className="data-box">
                    <div className="data">
                        <div className="endereco">
                            <h3><EnderecoIcon  />Endereço</h3>
                            <p>Rua {company.rua}</p> 
                            <p>Bairro {company.bairro}</p>
                            <p>Cidade {company.cidade}</p>
                            <p>Estado {company.estado}</p>
                            <p>CEP {company.cep}</p>
                        </div>
                        <div className="medias">
                            <h3><Media /> Medias Sociais</h3>
                            <p><Insta />{company.instagram}</p>
                            <p><Zap /> {company.whatssap}</p>
                        </div>
                    </div>
                    <div className="box-maps">

                    </div>
                </div>
            
            </> :
            <div className="error-page">Você não criou sua loja : <Link to='/painel/criar_loja'>Clique aqui</Link></div>
            
            }
        </Page>
    </PainelLayout>
}