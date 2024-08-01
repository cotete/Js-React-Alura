
import './TextAreaCarro.css'


const TextAreaCarro = (props)=>{


    const aoDigitado = (e)=>{
        props.aoAlterado(e.target.value)
    }
    return(
        <div className="Text-Area-add">
            <label>{props.label}</label>
            <input
            value = {props.valor}
            onChange={aoDigitado}
            required = {props.obrigatorio}
            placeholder={props.placeholder}/>
        </div>
    )
}

export default TextAreaCarro