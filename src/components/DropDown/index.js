import "./DropDown.css"

const DropDown = (props)=>{
    console.log(props.itens)
    return(
        <div className="DropDown">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown