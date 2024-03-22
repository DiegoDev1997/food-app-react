import { ReactNode } from "react"
import { Container,Main } from "./style"
import { Header } from "../Header"
import { Footer } from "../Footer"


type Props={
    children:ReactNode
}
export const Layout=({children}:Props)=>{
    return <Container>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </Container>
}