import { ReactNode } from "react"
import { Box } from "./style"
import { useGlobalContext } from "../../context/context"

type Props={
    children:ReactNode
}
export const Modal=({children}:Props)=>{
    const {handleModal,stateModal}=useGlobalContext()
    return <Box active={stateModal}>
        {children}
    </Box>

}