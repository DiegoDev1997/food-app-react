import { GlobalStyle } from "../../AppStyle";
import { styled } from "styled-components";

type Props={
    onDetails:boolean;
}
export const Box=styled.div<Props>`
display: flex;
border: none;
width:100%;
box-shadow: 0 0 2px #000;
margin:9px 0;
flex-direction: column;
.top{
    padding:17px 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${GlobalStyle.bgTheme};
   
    .state{
        padding: 8px 13px;
        border-radius: 15px;
        color: #FFF;
        background-color: #001C30;
    }
        .btn {
            cursor: pointer;
            height: 45px;
            width: 45px;
            .svg{
               fill: white;
            }
          
        }


    
    
}
.bottom{
    display: ${Props=>Props.onDetails ? 'grid':'none'};
    grid-template-columns: repeat(3,1fr);
    min-height: 250px;
    transform: all ease-in-out .3s;
    padding:32px 5px;
    background-color:white;


    .products{
       margin: 12px 0;
       height: 250px;
       overflow-y: auto;
       cursor: grab;
       &::-webkit-scrollbar {
        width: 3px;
        border-radius: 5px;
        background-color: ${GlobalStyle.bgTheme};
      }
      &::-webkit-scrollbar-thumb {
       background:#aaa;
       }
            .products-list-request {

                .products-request{
                    margin:5px;
                    display: flex;
                    flex-direction: column;
                    hr{
                        margin: 6px 0;
                    }
                    .content{
                        padding: 6px;
                            .details{
                                display: flex;
                                justify-content: space-around;
                                .details-product{
                                        display: flex;
                                        align-items: center;
                                            img{
                                                margin-right: 5px;
                                                height: 45px;
                                                width:45px;
                                            }
                                            .name{
                                                    font-weight: 900;
                                            }
                                    }

                                    .qdt{
                                        font-size: 22px;
                                        font-weight: 600;
                                    }
                        }
                    }
            }
            }
    }
}


.address{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DEDEDE;
    border-radius: 6px;
    .content{
        padding: 12px;
      div{
            font-weight: 900;
            color: #2B2730;
            font-size: 19px;
        span{
           color:initial;
           margin-left: 6px;
           font-weight: initial;
        }
      }    
    }
}

.info-request{
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
        padding: 12px;
      div{
            font-weight: 900;
            color: #2B2730;
            font-size: 19px;
        span{
           color:initial;
           margin-left: 6px;
           font-weight: initial;
        }
      }    
    }
}

.excluse{
    background-color: #DEDEDE;
    padding: 12px 32px;
    display: flex;
    align-items: center;
    justify-content: end;
    font-weight:700;
    color:#2B2730;
    cursor: pointer;
    .svg{
        height: 35px;
        stroke: grey;
        &:hover{
            stroke: #FF004D;
        }
    }
}

@media screen and (max-width:700px) {

    .bottom{
           display: ${Props=>Props.onDetails ? 'flex':'none'};
           flex-direction: column;
    }

    .address{
        margin: 32px 0;
        background-color: grey;
    }
    
} 
`