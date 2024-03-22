import { GlobalStyle } from "../../AppStyle";
import { styled } from "styled-components";

type props={
    qdt:number
}
export const Box=styled.div<props>`
box-shadow: 0 0 5px #000;
background-color: #FFFF;
border-radius: 3px;
width: 950px;
display: flex;

.btn-close{
    position: relative;
    right: 12px;
    left: 500px;
    height: 50px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items:center;
    border: none;
    background-color: transparent;
    width: 50px;
    transition: all ease .3s;
    .svg{
    fill:#aaa;
    height: 35px;
    width: 35px;
    &:hover{
        fill: ${GlobalStyle.bgThemeSecondary};
    }
}
}
.left{
    .head-left{
        display: none;
    }
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
       width: 40%;
       background:linear-gradient(to bottom,${GlobalStyle.bgTheme},#000);
        display:flex;
        justify-content: center;
        align-items: center;
       img{
            height:155px;
            width:155px;
        }
}

.right{
    flex: 1;
    padding:23px 12px;
    display: flex;
    flex-direction:column;
    .details-product{
        display: flex;
        justify-content: center;
        align-items: center;
        h3{
          font-size:32px;
          margin-right:6px;
        }
        span{
           outline:1px solid ${GlobalStyle.bgTheme};
           color:${GlobalStyle.bgTheme};
           padding: 12px;
           border-radius: 22px;
           box-shadow: 0 0 12px #aaa;
           margin: 0 12px;

        }
    }

    .details-two{
        margin: 22px 0;
        font-size: 19px;
        .description,.ingredientes{
          padding: 12px;
          height: 72px;
          font-weight: 500;
        }
        .price{
            font-weight: 800;
            font-size: 35px;
        }
        .divider{
            margin:22px;
            height: 1.5px;
            background-color:${GlobalStyle.bgTheme};
        }
        
    }
    .cx-btn{
            margin: 32px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    .cx-qdt{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
        margin:20px 0;
        .counter{
            margin: 22px 0;
            span{
                padding: 10px 25px;
                height: 55px;
                width: 55px;
                font-weight: 700;
                background: #F5F5F5;
                .qdt{
                    width: 55px;
                    padding: 5px;
                    display: flex;
                    justify-content: center;
                    align-items:center;
                 }
            }
            .action{
                cursor: pointer;
                color: white;
                width:55px;
                &:nth-child(1){
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                    background-color:${props=>props.qdt === 1  ?  '#aaa' : `${GlobalStyle.bgTheme}`};
                }
                &:nth-child(3){
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                    background-color:${props=>props.qdt == 10 ?  '#aaa' : `${GlobalStyle.bgTheme}`};
                }
            }
            
        }
    }
}



@media screen and (max-width:750px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    overflow:auto;
    top:0;
    width: 100%;
    height: 100%;
    left:0;
    right:0;
    bottom:0;
    .left{
        width: auto;
        height: auto;
        flex-direction: column;
        .head-left{
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 0;
            width: 100%;
            display: flex;
            padding:12px   13px;
            button{
                width: 65px;
                background-color: ${GlobalStyle.bgTheme};
                border:1px solid  #FFFF;
                border-radius: 5px;
                margin: 12px 5px;
                display:flex;
                padding: 6px;
                justify-content: center;
                align-items:center;
                img{
                    width: 80%;
                    height: 100%;
                }
            }
        }
        .cx-img{
            margin: 82px 0;
        }
    }
    .right{
        margin:22px 0;
        .btn-close{
        display:none;
       }
          .details-product{
                .category{
                    display:none;
                }
            }
        padding: 10px 13px;
        .description,.ingredientes{
          padding: 12px;
          font-size: 17px;
          height: auto;
          font-weight: 600;
        }
       .details-two{
        .divider{
            margin: 32px 0;
        }
       }
    }
}
@media screen and (min-width:820px){
    margin: 30px;
}
`