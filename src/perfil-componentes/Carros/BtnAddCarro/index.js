import ModalAddCarro from "../ModalAddCarro"
import "./BtnAddCarro.css"
import { useState } from "react"

const BtnAddCarro = (props) =>{

    const[show,setShow] = useState(false)

    
    const handleAddCarro = (carro) => {
        props.onAddCarro(carro);
        setShow(false); 
    };

    return(
        <div className="addCarro">
            <button className="btnAddCarro" onClick={()=>setShow(true)}>Adicionar Carro</button>
            <ModalAddCarro onAddCarro={handleAddCarro} isOpen = {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></ModalAddCarro>
        </div>
    )
}

export default BtnAddCarro