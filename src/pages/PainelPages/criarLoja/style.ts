import { GlobalStyle } from "../../../AppStyle";
import { styled } from "styled-components";


export const Container=styled.div`
margin: 90px 120px;
min-height:100vh;
h3{
    font-weight: 900;
    font-size: 42px;
}
p{
    margin:32px 0;
}

form{

    display:flex;
    .left{
        width:30%;
        padding:30px 0;
        display:flex;
        justify-content: center;
        align-items: flex-start;
        img{
            height:350px;
            width:350px;
            background-color:#aaa;
        }
    }
    .right{
        padding: 12px 33px;
        display:block;
        flex:1;

        .cx-btn{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 22px 0;
        }
        .cx-input{
            display: flex;
            flex-direction: column;
            label{
                font-size:17px;
                font-weight: bold;
                color:grey;
                margin:9px 0;
            }
            input{
                padding: 33px 12px;
            }
            p{
                margin: 12px 0;
                font-size: 17px;
            }
            select{
                padding: 33px 12px;
                font-size:18px;
                box-shadow:0 0 12px #aaa;
                border:none;
                option{
                    padding:22px;
                    font-size: 18px;
                }
                &:focus{
                 outline:2px solid ${GlobalStyle.bgTheme};
                 }
            }
        }
    }
}



@media screen and (max-width:750px){
    margin:50px 6px;
   form{
    width:100%;
    input{
        width:100%;
    }

   }
}
  
`