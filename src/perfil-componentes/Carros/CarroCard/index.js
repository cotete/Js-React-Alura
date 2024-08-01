import { useState } from "react"
import "./carroCard.css"
import CarroModal from "../CarroModal"

const CarroCard = (props) =>{
    const[show,setShow] = useState(false)


    return(
        <div className="carroCard">
            <button className="carroCard-h1" onClick={()=>setShow(true)}>{props.nome}</button>
            <CarroModal carro ={props.carro} isOpen= {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></CarroModal>
        </div>
    )
}

export default CarroCard