import './TextArea.css'


const TextArea = (props)=>{
    return(
        <div className="Text-Area">
            <label>{props.label}</label>
            <input
            placeholder={props.placeholder}/>
        </div>
    )
}

export default TextArea