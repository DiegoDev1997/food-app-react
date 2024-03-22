import { Box } from "./style"
import { Link } from "react-router-dom"


export const Footer=()=>{
    return <Box>
    <div className="content">
        <div className="cx">
            <Link to='/painel/cardapio'>painelAdmin</Link>
        </div>
        <div className="cx">
            2
        </div>
        <div className="cx">
            3
        </div>
    </div>
    
    </Box>
}