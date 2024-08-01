import { Link } from "react-router-dom"


const NavBar = () => {

    return(
        <div className="Nav-Bar">
            <Link to="../Perfil"> Perfil </Link>
            <Link to="../Principal">Principal</Link>
        </div>
    )
}

export default NavBar