import styled from "styled-components";
import { GlobalStyle } from "../../../AppStyle";

export const Page=styled.div`
padding: 100px 20px;
.box-top{
    display: flex;
    margin-bottom: 100px;
    border-bottom: 1px solid #eee;
    align-items: center;
    justify-content: space-between;
    .logo-name{
    margin: 50px 0;
    display: flex;
    font-size:25px;
    align-items: center;
      img{
        border-radius: 100%;
        height: 200px;
        background-color: #eeee;
        width: 200px;
        margin-right: 12px;
       
    }
   }

}

.data-box{
display: flex;
.data{
    font-size: 17px;
    margin: 100px 0;
    width: 30%;
    padding: 0 30px;
    *{
        .svg{
            height: 55px;
            margin-right: 12px;
            stroke: ${GlobalStyle.bgTheme};
        }
    }
    h3{
        display: flex;
        align-items: center;
        margin: 20px 0;
    }
    p{
        margin: 12px 0;
        color: grey;
        font-size: 17px;
        display: flex;
        align-items: center;
        .svg{
            height: 35px;
           stroke-width: 0.1px;
            margin-right: 12px;
            fill:${GlobalStyle.bgTheme};
        }
    }
}
.box-maps{
    flex:1;
    background-color:#eeee;
}

}

.error-page{
font-size: 22px;
}

`