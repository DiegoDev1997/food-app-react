import { HTMLAttributes } from "react"
import { Box } from "./style"

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    color?:string,
    bg?:string,
    p?:string,
    m?:string,
    h?:string | number,
    w?:string | number,
    shadow?:string,
    shadowh?:string,
    bgh?:string,
    colorh?:string,
    text?:string,
    radius?:string,
    radiush?:string
    size?:number,
    type?:string,
    fHeight?:string,
    outlineH?:string,

}
export const Button=({text,...rest}:Props)=>{
    return <Box {...rest}> {text} </Box>
}