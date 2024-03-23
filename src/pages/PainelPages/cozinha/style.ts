import { GlobalStyle } from "../../../AppStyle";
import { styled } from "styled-components";

type Props={
    onprint:boolean
}
export const Container=styled.div`
padding: 50px 18px;

.top-page{
    margin: 30px 0;
    h3{
        font-weight: 900;
        font-size: 35px;
        margin: 20px 0;
    }
    p{
        font-size: 22px;
    }
 
}
.cx-requests-painel{
    display: grid;
    gap: 22px;
    grid-template-columns: repeat(4,1fr);
}


@media screen and (max-width:830px){
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 50px 8px;
    .cx-requests-painel{
        display: flex;
        padding: 30px 12px;
        align-items: center;
        width: 100%;
        flex-direction: column;
}

}


@media print{
        display:none;
}



`
export const BoxPrint=styled.div`
display:none;

@media print {
    color: #2B2730;
    .header{
        display: flex;
        justify-content: center;
        margin:22px 0;
        font-size: 33px;
    }
    h3{
        font-size:22px;
    }
    .info-cliente,.info-address{
        display: flex;
        flex-direction: column;
        margin:20px 0;
    }
    .produtos,.address{
        margin: 12px 0;
        hr{
            font-weight: 600;
            height: 1.5px;
        }

    }
   .resolucao{
    display: flex;
    flex-direction: column;
    margin:20px 0;
    span{
        margin-right: 5px;
       .title{
         font-weight: 900;
       }
    }
   }

    
    background-color: blue;
    list-style: none;
    display: block;
    font-size: 19px;

}
`