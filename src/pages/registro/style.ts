import styled from "styled-components";


export const Box=styled.div`
display:flex;
height:800px;
margin: 150px 350px;
padding-bottom: 200px;
    form{
        width:100%;
        padding:45px 12px;
        height:fit-content;
        padding:22px;

        h3{
            font-family:Roboto;
            font-size:32px;
            margin:22px 0;
        }
        p{
            font-size: 22px;
            margin:12px 0;
        }
        .cx-inputs{
            margin:35px 0;
            display:flex;
            width:100%;
            flex-direction: column;
        }

        .cx-btn{
            margin:22px 0;
            display:flex;
            justify-content: center;
        }
        .line {
            a{
                margin-left:6px;
            }
        }
    }


@media screen and (max-width:950px) {
    height: auto;
    margin: 0;
   form{
    padding: 22px 12px;
    .cx-inputs{
        display: flex;
        flex-direction: column;
    }
    .cx-btn{
        button{
            width: 50%;
        }
    }
   }
}
`

/*

.right{
    flex:1;
    background-image:url('imgs/bglogin.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}*/