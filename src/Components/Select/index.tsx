import { HTMLAttributes } from "react"
import { Box } from "./style"



export interface SelectProps extends HTMLAttributes<HTMLSelectElement>{
    p?:string,
    m?:string,
    w?:string,
    h?:string,
    radius?:number,
    size?:number,
    outline?:string;
    optionList?:string[] 
    shadow?:string
    
}

export const Select=({optionList,...rest}:SelectProps)=>{
    return <Box {...rest}>
    {
        optionList?.map((i,k)=>(
            <option key={k} value={i} >{i}</option>
        ))
    }
    
    
    </Box>
}