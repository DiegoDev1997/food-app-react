import { GlobalStyle } from "../../../AppStyle"
import { styled } from "styled-components"



export const Page=styled.div`
padding: 100px 22px;

.header-page{
    display:flex;
    width:100%;
    margin:70px 0;
    justify-content:space-between;
    align-items:space-between;
    h2{
      font-size:32px;
   }
}
`

export const TableCategorias=styled.table`
margin:50px 0;
width:100%;
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
    padding:22px;
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
    transition: all ease .3s;
    text-align: center; 
    align-items: center;
    vertical-align:middle;
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
export const NewCategory=styled.div`
padding:22px;
margin:90px 0;
display: flex;
align-items:center;
justify-content:center;
transition: all ease .4s;
.content{
    display:flex;
    padding:22px;
    width:max-content;
    background-color: #fff;
    outline:1px solid  #aaa;
    box-shadow:0 0 8px #aaa;
    align-items:center;
    h4{
    margin:12px 0;
}
div{
    flex:1;
    margin:0 30px;
}
}

`