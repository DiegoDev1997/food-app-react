import { GlobalStyle } from "../../AppStyle";
import { styled } from "styled-components";

type Props={
    onDetails:boolean;
    bg:string,
    bgState:string
}
export const Box=styled.div<Props>`
display: flex;
width:100%;
margin:9px 0;
transition: all ease .2s;
flex-direction: column;
box-shadow: ${Props=>Props.onDetails ? '0 0 5px #000':'0'};

.top{
    padding:17px 12px;
   display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Props=>Props.bg};
    .state{
        padding: 8px 13px;
        border-radius: 15px;
        color: #FFF;
       background-color: ${Props=>Props.bgState};
    }
        .btn {
            cursor: pointer;
            img{
               height: 25px;
            }
        }


    
    
}
.info-user{
    padding: 12px;
    color: #FFF;
    background-color: ${Props=>Props.bg};
 
}
.info-state{
    padding: 12px 32px;
    background-color: #2B2730;
    select{
        padding:12px;
        border: none;
        font-weight: 800;
        box-sizing: 0;
        width: 100%;
        border-radius: 3px;
        outline:2px solid ${GlobalStyle.bgTheme};
    }


}


.bottom{
    display: ${Props=>Props.onDetails ? 'flex':'none'};
    min-height: 250px;
    flex-direction: column;
    transform: all ease-in-out .3s;
    padding:12px 5px;
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
                        margin: 2px 0;
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
                                                height: 35px;
                                                width:35px;
                                            }
                                            .name{
                                                    font-weight: 500;
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
    background-color: #ECF8F9;
    border: 1px solid #dedede;

    .content{
        padding: 12px;

      div{
            font-weight: 900;
            color: #2B2730;
            font-size: 16px;
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
    .content{
         padding: 12px;
      div{
            font-weight: 900;
            color: #2B2730;
            font-size: 16px;
        span{
           color:initial;
           margin-left: 6px;
           font-weight: initial;
        }
      }    
    }
}

*{
    font-size: 14px;
}

.cx-actions{
    display:flex;
    justify-content: center;
    padding: 50px 32px;
    button{
        padding:12px 32px;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 5px;
        transition: all ease .4s;
        background-color: #1D5D9B;
        &:hover{
            background-color: #071952;
        }
    }
}

@media screen and (max-width:750px) {
    
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