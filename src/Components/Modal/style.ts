import { type } from "os";
import { styled } from "styled-components";


type Props={
  active:boolean
}


export const Box=styled.div<Props>`
display:${Props=>Props.active ? 'flex' : 'none'};
justify-content:center;
transition: all ease .3s;
align-items: center;
background-color: rgba(34, 31, 32, 0.8);
position: fixed;
top:0;
left:0;
bottom:0;
right:0;
`