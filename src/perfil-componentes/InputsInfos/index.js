import "./inputsInfos.css"

const InputsInfos = (props)=>{

    return(
        <div className="inputInfo">
            <label className="label">{props.nome}</label>
            <input
            className = "input"
            placeholder={props.infoUser}
            disabled/>
        </div>
    )
}

export default InputsInfos