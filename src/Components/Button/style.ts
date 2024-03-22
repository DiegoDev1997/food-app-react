import { styled } from "styled-components";
import { Props } from ".";


export const Box=styled.button<Props>`
color:${Props=>Props.color ? Props.color : 'white'};
background-color:${Props=>Props.bg ? Props.bg : '#000'};
padding:${Props=>Props.p ? `${Props.p}` : '12px 20px'};
margin:${Props=>Props.m ? `${Props.m}` : 'auto'};
height:${Props=>Props.h ? `${Props.h}px` : 'auto'};
cursor:pointer;
width:${Props=>Props.w ? `${Props.w}` : '100px'};
font-weight:${Props=>Props.fHeight ? `${Props.fHeight}` : '16px'};
font-size:${Props=>Props.size ? `${Props.size}px` : '16px'};
transition:all ease .3s;
border:none;
border-radius:${Props=>Props.radius ? `${Props.radius}` : '0'};
box-shadow:${Props=>Props.shadow ? `${Props.shadow}` : '0'};
&:hover{
    color:${Props=>Props.colorh ? Props.colorh : 'white'};
    box-shadow:${Props=>Props.shadowh ? `${Props.shadowh}` : '0'};
    border-radius:${Props=>Props.radiush ? `${Props.radiush}` : 'auto'};
    background-color:${Props=>Props.bgh ? Props.bgh : '#000'};
   outline:${Props=>Props.outlineH ? Props.outlineH : 'none'};
}


@media screen and (max-width:700px){
    width:100%;
}
`