import { styled } from "styled-components";
import { SelectProps } from ".";
import { GlobalStyle } from "../../AppStyle";


export const Box=styled.select<SelectProps>`
margin: ${Props=>Props.m ? `${Props.m}`:'5px'};
height: ${Props=>Props.h ? `${Props.h}`:'initial'};
width: ${Props=>Props.w ? `${Props.w}`:'100%'};
border:none;
font-size:${Props=>Props.size? `${Props.size}`:'18px'};
outline:${Props=>Props.radius ? `${Props.outline}`: `2px solid ${GlobalStyle.bgTheme}`};
padding: ${Props=>Props.p ? `${Props.p}`:'5px'};
border-radius: ${Props=>Props.radius ? `${Props.radius}`:'3px'};
transition:all ease 0.3s;
box-shadow: ${Props=>Props.shadow ? `${Props.shadow}`:'0 0 15px #aaa'};

option{
   padding:22px;
   font-size:${Props=>Props.size? `${Props.size}`:'18px'};
}
`