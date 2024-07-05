import "./DropDown.css"

const DropDown = (props)=>{

    return(
        <div className="DropDown">
            <label>{props.label}</label>
            <select onChange={e =>props.aoAlterado(e.target.value)} required = {props.required} value={props.valor}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown