import "./acessibilidade.css"
import CheckBoxDarkMode from "./CheckBoxDarkMode"

const Acessibilidade = (props)=>{

    const HandleModo=(modo)=>{
        props.modo(modo)

    }

    return(
        <div className="acessibilidade">
            <h1>Acessibilidade</h1>
            <CheckBoxDarkMode texto ="Modo escuro" onChange={HandleModo}/>
        </div>
    )
}

export default Acessibilidade