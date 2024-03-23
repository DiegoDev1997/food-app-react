import { GlobalStyle } from "../../AppStyle";
import { styled } from "styled-components";

export const Box=styled.div`
display: flex;
min-height:100vh;


`

export const HeaderPainel=styled.header`
width:14vw;
position:fixed;
height:100vh;
box-shadow: 0 0 5px #000;
background:linear-gradient(to bottom, ${GlobalStyle.bgTheme} 80%,#000);
display: flex;
justify-content:center;
    nav{
        margin-top:50px;
        padding:0 12px;
    
        .cx-logo{
            display: flex;
            justify-content: center;
            img{
                border-radius: 100%;
                background-color: ${GlobalStyle.bgThemeSecondary};
                width:180px;
                height:180px;
            }
        }
        .cx-links{
             display:flex;
             flex-direction:column;
             align-items: center;
             margin:32px 0;
                a{
                    padding:15px 42px;
                    width:100%;
                    display:flex;
                    border-radius: 5px;
                    transition:all ease 0.2s;
                   justify-content: center;
                    align-items: center;
                    margin:12px 0;
                    color:#FFF;
                    border-bottom: 2px solid ${GlobalStyle.bgThemeSecondary};
                    font-size:19px;
                    &:hover{
                        background:${GlobalStyle.bgThemeSecondary};
                       
                    }
                }
            }
    }


@media screen and (max-width:830px){
    display: none;
    justify-content: space-around;
    position: fixed;
    height:55px;
    width: 100vw;

}
@media print{
    display: none;
}
`
export const BodyPainel=styled.div`
min-height:900px;
margin-left:14vw;
padding:13px;
flex:1;

@media screen and (max-width:830px){
    width:100vw;
    margin-left: 0;
    padding: 6px;
}
`


