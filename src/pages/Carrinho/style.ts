import { GlobalStyle } from "../../AppStyle";
import { styled } from "styled-components";


export const Container=styled.div`
padding:50px 260px;
min-height:800px;
h3{
    font-weight: 900;
    margin: 20px 0;
    font-size:32px;
}
.error-cart{
    border: 2px dotted ${GlobalStyle.bgTheme};
    color:${GlobalStyle.bgTheme};
    padding:32px 20px;
    font-size:22px;
}

.label{
    font-weight:900;
    margin:0;
}
.products-list{
    height:360px;
    padding:32px;
    margin: 100px 0;
    overflow:auto;
    cursor: grab;
       &::-webkit-scrollbar {
            width: 3px;
            border-radius: 5px;
            background-color: ${GlobalStyle.bgTheme};
      }
       &::-webkit-scrollbar-thumb {
          background:#aaa;
       }
        .divider{
            background-color: #aaa;
            height:1.5px;
        }
        .lixeira{
            font-weight: 800;
            font-size: 28px;
            color: #606C5D;
            cursor: pointer;
        }
  
    
 }
.values-cart{
 display:flex;
 border-radius:3px;
 background-color: #9DB2BF;
 flex-direction: column;
 padding:18px;
 font-size:22px;
 margin:50px 0;
    span{
        margin:6px 0;
        .title{
        font-weight:900;
        margin-right:12px;
        
    }
 }


}

.cx-btn{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;
    button{
        cursor: pointer;
        width: 25%;
        padding: 22px 32px;
        border: none;
        margin: 12px;
        color: #000;
        font-size: 18px;
        transition:all ease .3s;
        color: #FFF;
        border-radius: 3px;
        
    }
    .clear-cart{
         color:grey;
         background-color: transparent;
         &:hover{
          color: #FE0000;
         }
        }

       .finalize{
            background-color:#3559E0;
            &:hover{
                background-color:#1640D6;
            }
        }
}

@media screen and (max-width:750px) {
    .product-item{
        font-size: 12px;
       .products-list{
          height:auto;
          padding:22px;
          overflow:hidden;
          img{
            height:15px;
            width:15px;
          }
       }

    }

   
}
@media screen and (max-width:950px){
    padding:50px 12px;
    .products-list{
        margin:50px 0;
        padding: 8px;
    }
}
`

export const ProducttItem=styled.div`
border-bottom: 1px solid grey;
display: flex;
justify-content: space-between;
padding: 12px;
.left{
    display: flex;
    align-items: center;
    img{
        height: 45px;
        width: 45px;
        margin-right:12px;
    }
    p{
        font-size:18px;
        font-family: "Roboto";
    }
}


.right{
    display: flex;
    align-items: center;
    .qdt{
        display: flex;
        align-items: center;
        margin:0 122px;
        font-size: 18px;
        span{
            font-weight: 800;
        }
    }
   .close{
     cursor: pointer;
     transition: all ease .3s;
        .svg{
            height: 35px;
            fill: grey;
            &:hover{
                fill:#FF004D;
            }
        }
   }
}


@media screen and (max-width:850px){
    .left{
        img{
            height: 30px;
            width: 30px;
        }
    }
    .right{
        .qdt{
            margin: 0 22px;
        }
        .close{
            .svg{
                height: 25px;
            }
        }
    }
}
`