import { GlobalStyle } from "../../AppStyle";
import { styled } from "styled-components";


export const Box=styled.div`
background-color: #fff;
border-radius:3px;
transition:all ease .3s;
border:1px solid #aaa;
&:hover{
    box-shadow:0 0 22px #000;
}
`

export const BoxTop=styled.div`
padding: 32px 0;
background-color:${GlobalStyle.bgTheme ? GlobalStyle.bgTheme : '#E8E2E2'};
background:linear-gradient(to bottom,${GlobalStyle.bgTheme},#000);
.cx-img{
    display: flex;
    justify-content: center;
   img{
    height:125px;
    width:125px;
   }
  
}

@media screen and (max-width:750px){
    .cx-img{
    display: flex;
    justify-content: center;
   img{
   
    height:75px;
    width:75px;
   }
}
}

`

export const BoxBottom=styled.div`
padding:62px 6px;
.divider{
    background-color:${GlobalStyle.bgTheme};
    margin:22px;
    height: 1.0px;
        }


.details{
  .top-details{
        display:flex;
        justify-content: space-around;
        .name-product{
            font-weight: 700;
            font-weight: 900;
            font-size:25px;
        }
        .category{
            font-size:15px;
            padding: 12px;
            border-radius:22px;
            outline:2px solid ${GlobalStyle.bgTheme};
            color:${GlobalStyle.bgTheme}
        }

    }
}

.finals{
    margin: 34px 0;
    .ingredientes{
        color: #000;
        height:32px;
        font-weight: 500;
    }
    .price{
        margin: 22px 0;
        font-size:32px;
        font-weight: 800;
    }
     .cx-btn{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 32px 0;
            
        }
        .actions-btn{
            margin: 30px 0;
            button{
                flex:1;
                transition: all ease .3s;
                .svg{
                    height: 35px;
                    stroke:white;
                }
                &:hover{
                    background-color: transparent;
                    outline:2px solid ${GlobalStyle.bgTheme};
                    .svg{
                        stroke:${GlobalStyle.bgTheme};
                    }
                }
          }
        }
    }
   
     

@media screen and (max-width:960px){
    box-shadow: none;
    &:hover{
        box-shadow: none;
    }
    .details{
        .top-details{
        padding: 12px;
        h2{
            font-weight: 500;
            text-align: justify;
            height: 50px;
            font-family: "Poppins";
        }
        .category{
            display: none;
        }
    }
    }
    .finals{
        .price{
           font-size: 19px;
       }
    }
}


`
