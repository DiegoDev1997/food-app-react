import { BoxRight, Boxleft, Container } from "./style"
import {Link} from "react-router-dom"
import { useGlobalContext } from "../../context/context"
import Menu from "../../svgs/menu"
import Close from "../../svgs/close"
import { NavLinkLogged, NavLinkNotLogged } from "../../utils/menu_links"
import { NavLink } from "react-router-dom"




export const Header=()=>{
    const {handleStateMobileMenu,stateMobileMenu,user}=useGlobalContext()
    let  state=stateMobileMenu

    return <Container>
        <Boxleft>
           <div className="logo">
            <Link to={'/'}>
                <img src={'/icons/logoloja.png'} alt="" />
            </Link>
           </div>
        </Boxleft>
        <BoxRight statemobile={stateMobileMenu}>
            <div className="cx-btn-mobile">
               <button onClick={()=>handleStateMobileMenu(true)}>
                  <Menu />
               </button>
            </div>
           <div className="nav-bar" onClick={()=>handleStateMobileMenu(false)}>
            <div className="cx-close-menu">
                <button onClick={()=>handleStateMobileMenu(true)}>
                    <Close />
                </button>
                </div>
            <nav>
                {
                    user && NavLinkLogged.map((i,k)=>(
                        <Link to={i.path} >{i.name}</Link>
                    ))
                }
                {!user  &&  NavLinkNotLogged.map((i,k)=>(<Link to={i.path} >{i.name}</Link>)) }
            </nav>

           </div>
        </BoxRight>
    
    
    </Container>
}