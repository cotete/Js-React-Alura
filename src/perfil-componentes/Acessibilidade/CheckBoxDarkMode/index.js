
import "./CheckBoxDarkMode.css"
import CheckBox from "../CheckBox"

const CheckBoxDarkMode = (props)=>{

    const handleModo = (modo)=>{
        props.onChange(modo)
    }
    return(
        <div className="checkBoxDarkMode">
            <label className="labelCheckBox">{props.texto}</label>
            <CheckBox change = {handleModo}/>
        </div>
    )
}

export default CheckBoxDarkMode