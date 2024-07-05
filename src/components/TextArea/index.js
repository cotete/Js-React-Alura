
import './TextArea.css'


const TextArea = (props)=>{


    const aoDigitado = (e)=>{
        props.aoAlterado(e.target.value)
    }
    return(
        <div className="Text-Area">
            <label>{props.label}</label>
            <input
            value = {props.valor}
            onChange={aoDigitado}
            required = {props.obrigatorio}
            placeholder={props.placeholder}/>
        </div>
    )
}

export default TextArea