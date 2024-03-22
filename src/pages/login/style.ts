import styled from "styled-components";


export const Box=styled.div`
display:flex;
height:800px;

.left{
    width:50vw;
    display: flex;
    align-items: center;
    padding:200px 22px;
   

    form{
        width:100%;
        padding:45px 12px;
        height:fit-content;



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
            display:flex;
            width:100%;
            flex-direction: column;
            .google{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 390px;
                align-self: center;
                padding: 32px;
                margin-top: 22px;
                border-radius: 3px;
                background-color: #EEEEEE;
                border: 1px solid #eee;
                a{
                    color:#4682A9;
                    font-weight: 800;
                }
                img{
                    height: 35px;
                }
            }
        }

        .cx-btn{
            margin:22px 0;
            display:flex;
            justify-content: center;

           
        }
    }
}
.right{
    flex:1;
    background-image:url('imgs/bglogin.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.line{
    p{
        font-size: 15px;
    a{
        margin-left:6px;
        
    }
}
}

@media screen and (max-width:1366px) {
    height: auto;
    .right{
        display: none;
    }
    .left{
        width:100%;
        padding: 50px 0;
    
    }
   form{
    .line{
     p,a{
        font-size: 18px;
     }
   }

    .cx-inputs{
        display: flex;
        flex-direction: column;
       
    }
    .cx-btn{
        button{
            width: 50%;
        }
    }
.google{
   
        
        a{
            font-size: 14px;
        }
        p{
            font-size:15px;
        }
    }

}

}


`