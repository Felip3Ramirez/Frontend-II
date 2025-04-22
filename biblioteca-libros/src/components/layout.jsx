import NavBar from "./navbar";

export default function Layout ({children}){
    return(
        <div>
            <NavBar></NavBar>
            <div>{children}</div>
        </div>
    )
}