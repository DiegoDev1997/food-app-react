import { ProductType } from "./produtos"

export type AddressType={
    id:number,
    rua:string,
    cpf:string,
    ativo:boolean,
    bairro:string,
    numero:string,
    complemento:string,
    cidade:string,
    estado:string
}

export type RequestType={
    id:number,
    products:ProductType[],
    totalvalue:number,
    desconto:number,
    taxaEntrega:number,
    date:string,
    state:string,
    address:AddressType
}

