import { HTMLAttributes,InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Box } from "./style";



export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>{
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

export  const TextArea=({...rest}:Props)=>{

    return <Box {...rest}></Box>
}