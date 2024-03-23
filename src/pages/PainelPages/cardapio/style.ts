import { GlobalStyle } from "../../../AppStyle";
import { styled } from "styled-components";



export const Container=styled.div`
margin: 50px 0;
display: flex;
flex-direction: column;

.top-page{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 50px 12px;
    h3{
        font-size: 33px;
        color: #2B2730;
        font-weight: 900;
    }
}
.container-products{
    display: grid;
    gap: 50px 12px;
    grid-template-columns:repeat(4,1fr);
    
    .actions-btn{
        display: flex;
        margin:32px 0;
        justify-content:space-around;
        button{
                cursor: pointer;
                background-color: ${GlobalStyle.bgTheme};
                border:1px solid  #FFFF;
                border-radius: 5px;
                margin: 12px 5px;
                display:flex;
                padding: 6px 42px;
                color:white;
                height:55px;
                font-size: 14px;
                justify-content: center;
                align-items:center;
                &:hover{
                    box-shadow: 0 0 5px #000;
                    border:1px solid  #FFF;
                }
                img{
                    width: 90%;
                    height: 80%;
                }
                
            }
    }
}



@media screen and (max-width:730px){
   
    .container-products{
        grid-template-columns:repeat(2,1fr);
        gap: 50px 6px;
        padding:0 15px;
    }
    
}
@media screen and (min-width:820px) and (max-width:950px){
   
   .container-products{
       grid-template-columns:repeat(3,1fr);
       gap: 50px 6px;
       padding:0 15px;
   }
   
}
`

export const TableCardapio=styled.table`
margin:50px 0;
box-shadow: 0 0 12px  #000;
border-collapse: collapse;
thead{
    background-color: ${GlobalStyle.bgTheme};
    td{
        padding: 22px;
        color:white;
        font-size: 19px;
        font-weight: bold;
    }
}
td,tr{
    padding:12px;
    margin: 0;
    font-weight:700;
    color: #222;
    border:1px solid #aaa;
    text-align: center; 
    width: 33,33%;
     vertical-align: middle;
    img{
        height: 60px;
        width: 60px;
    }
}
.actions{
    margin: auto;
    transition: all ease .3s;
    .svg{
        height:35px;
        stroke:#aaa;
        margin: 0 22px;
        &:hover{
            cursor: pointer;
            stroke: ${GlobalStyle.bgTheme};
        }
    }
}
`
type Props={
    active:string
}

export const ToogleView=styled.div<Props>`
span{
    cursor:pointer;
    transition: all ease .3s;
}
 .one{      
           background-color: ${props=>props.active === 'card'  ? `${GlobalStyle.bgTheme}` : 'transparent'};
            border:1px solid #ddd;
            color: ${props=>props.active === 'card'  ? 'white' : '#222'};
            border-top-left-radius: 33px;
            border-bottom-left-radius: 33px;
            padding:12px;
  }
  .two{
    background-color: ${props=>props.active === 'table'  ? `${GlobalStyle.bgTheme}` : 'transparent'};
    border:1px solid #ddd;
            color: ${props=>props.active === 'table'  ? 'white' : '#222'};
            border-top-right-radius: 33px;
            border-bottom-right-radius: 33px;
            padding:12px;
        
    }


`