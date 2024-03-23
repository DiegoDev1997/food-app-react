'use client'
import { GlobalStyle } from "../../AppStyle"
import { styled } from "styled-components"


type Props={
    statemobile:boolean
}

export const Container=styled.div`
padding: 32px 35px;
display: flex;
height: 90px;
justify-content: space-between;
background-color: ${GlobalStyle.bgTheme};
align-items: center;
box-shadow:  0 0 5px #FFF;





`

export const Boxleft=styled.div`

.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
         color: white;
         color: white;
         font-family: 'Belanosima', sans-serif;
         font-size: 32px;
       img{
        margin: 12px;
        height: 120px;
       }
       
    }
}

`

export const BoxRight=styled.div<Props>`


.cx-btn-mobile {
    display: none;

        button{
            border:none;
            height: 55px;
            width: 55px;
            border-radius: 3px;
            padding: 7px;
            .svg{
                height: 100%;
                width: 100%;
                fill:${GlobalStyle.bgTheme};
            }
    } 
} 

.nav-bar{
    display: flex;
    font-size: 16px;
    .cx-close-menu{
        display: none;
    }
}
.nav-bar nav{
    a{
        border-radius: 2px;
        text-align: center;
        color:white;
        color: white;
        padding: 12px;
        font-weight: 600;
        transition: all ease .2s;
        &:hover{
            color:#FFF;
            font-weight: 800;
            background-color:${GlobalStyle.bgThemeSecondary};

        }
    }

}

@media screen and (max-width:1180px) {
   
    .cx-btn-mobile{
        display: flex;
    }
    .nav-bar{
        display:${Props=>Props.statemobile  ? 'flex' : 'hidden'};
        background-color:${GlobalStyle.bgThemeSecondary};
        position: fixed;
        z-index: 1;
        flex-direction: column;
        align-items: center;
        right: 0;
        left:auto;
        width: ${Props=>Props.statemobile  ? '60vw' : '0'};
        top:0;
        bottom: 0;
        transition: all ease .3s;
        box-shadow: 0 0 5px #000;
        .cx-close-menu{
            margin-bottom: 200px;
            padding: 12px;
            width: 100%; 
            display:${Props=>Props.statemobile  ? 'flex' : 'none'};
               justify-content: flex-end;
            button{
                background-color: transparent;
                border: none;
               
            }
            .svg{
                height: 45px;
                fill:${GlobalStyle.bgTheme};
            }
        }
        nav{
            display:${Props=>Props.statemobile  ? 'flex' : 'none'};
            flex-direction: column;
            align-items: center;
            width:${Props=>Props.statemobile  ? '100%' : '0'};
            a{
                display:${Props=>Props.statemobile  ? 'flex' : 'none'};
                width:${Props=>Props.statemobile  ? '100%' : '0'};
                padding: 12px 0;
                display:flex;
                align-items: center;
                justify-content: center;
                border-bottom: 1px solid #eee;
            }
         
        }

        
    }
}
`