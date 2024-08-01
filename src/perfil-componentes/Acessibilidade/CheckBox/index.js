import { useEffect, useState } from "react"
import "./CheckBox.css"

const CheckBox = (props)=>{

    
    const [modo,setModo] = useState(() =>{
        const saved = localStorage.getItem("check");
        return saved !== null ? JSON.parse(saved) : true;
    })

    useEffect(()=>{
        localStorage.setItem("check", JSON.stringify(modo));
        props.change(modo);
    }, [modo, props]);
    
    const changeModo = (e)=>{
        if(modo === false){
            setModo(true)
        }
        else{
            setModo(false)
        }
    }

    let check = JSON.parse(localStorage.getItem("check"))
    return(
        <input value={check} checked={check} onChange={changeModo} type="checkbox" className="checkBox"></input>
    )
}
export default CheckBox