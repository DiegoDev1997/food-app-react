import { styled } from "styled-components"
import { Props } from "."
import { GlobalStyle } from "../../AppStyle"


export const Box=styled.input<Props>`
display:${Props=>Props.d ? `${Props.d}`: 'auto'};
padding:${Props=>Props.p ? `${Props.p}`: '12px'};
margin:${Props=>Props.m ? `${Props.m}`: 'auto'};
font-size:${Props=>Props.size ? `${Props.size}px`: '15px'};
width:${Props=>Props.w? `${Props.w}`: 'auto'};
height:${Props=>Props.h ? `${Props.h}`: '32px'};
transition:all ease-in-out 0.2s;
border:none;
border-radius:2px;
outline:none;
box-shadow:0 0 12px #aaa;
&:focus{
    outline:2px solid ${GlobalStyle.bgTheme};
}
&::placeholder{
    color:${Props=>Props.placeholderColor ? `${Props.placeholderColor}`: 'auto'};
}

@media screen and (max-width:950px){
    width:100%;
}
`