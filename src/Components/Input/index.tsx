import { HTMLAttributes,InputHTMLAttributes } from "react";
import { Box } from "./style";



export interface Props extends InputHTMLAttributes<HTMLInputElement>{
   d?:string,
   bg?:string,
   w?:string,
   h?:string,
   p?:string | number,
   m?:string,
   size?:number,
   placeholderColor?:string,
   outlineColor?:string
}

export  const Input=({...rest}:Props)=>{

    return <Box {...rest}></Box>
}