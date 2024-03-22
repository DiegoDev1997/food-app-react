import { styled } from "styled-components";


export const Container=styled.div`
display:flex;
flex-direction:column;
margin:150px 0;
margin-top:55px;
.header-page{
  margin: 35px;
  font-size: 23px;
}
.container-requests{
    width: 100%;
    padding:32px 123px;
    display:flex;
    flex-direction:column; 
    align-items:center;
}

@media screen and (max-width: 700px) {
    .header-page{
    margin: 35px 12px;
   font-size: 19px;
}
    .container-requests{
        padding: 32px 12px;
    }
}

`