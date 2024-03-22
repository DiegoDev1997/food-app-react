import { GlobalStyle } from "../../AppStyle";
import { styled } from "styled-components";



export const Container=styled.div`
padding: 100px 150px;
.welcome-user{
    margin:50px 0;
    display: flex;
    justify-content: space-around;
    h3{
        font-size: 34px;
    }
    .search{
        display: flex;
        align-items: center;
        label{
            font-size: 18px;
        }
     .cx-input{
        width: 400px;
        display: flex;
        align-items: center;
        input{
            border-radius: 33px;
            margin:12px;
            display: hidden;
            box-shadow:none;
            border:1px solid #eee;
            flex:1;
            font-size: 17px;
            width:100%;
            &:focus{
                box-shadow: 0 0 7px #000;
            }
        }
        .svg{
            position:relative;
            height:35px;
            fill: #eee;
            left:3px;
            cursor: pointer;
            &:hover{
                fill:${GlobalStyle.bgTheme};
            }
        }
     }
    }
}

.container-products{
    display: grid;
    margin:70px 0;
    gap:32px 12px;
    grid-template-columns: repeat(4,1fr);
}


@media screen  and (max-width:750px){
    padding:  100px 12px;
    .welcome-user{
        flex-direction: column;
        .search{
            margin:30px 12px;
            flex-direction: column;
            .cx-input{
                width: 98%;
                input{
                    border-radius: 12px;
                }
            }
        }
    }
   .container-products{
    grid-template-columns: repeat(2,1fr);
   }
}

@media screen  and (min-width:850px) and (max-width:1024px){
    padding:  100px 19px;
    .welcome-user{
        flex-direction: column;
        .search{
            margin:30px 12px;
            flex-direction: column;
            .cx-input{
                width: 98%;
                input{
                    border-radius: 12px;
                }
            }
        }
    }

   .container-products{
    grid-template-columns: repeat(3,1fr);
   }
}
`