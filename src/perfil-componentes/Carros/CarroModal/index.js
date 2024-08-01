import "./carroModal.css"
import { useRef , useEffect } from "react"

const CarroModal = (props)=>{

    const ref = useRef()

    useEffect(() =>{
        if(!props.isOpen){
            return;
        }
    const dialog = ref.current
    dialog.showModal();
    return() =>{
        dialog.close();
    };
    },[props.isOpen]);

    let carro = props.carro

    const revisao = ()=>{
        if(carro.Quilometragem > 8000){
            return<span>Cuidado está próximo da revisão de 10000 Quilômetros. Faltam {10000 - carro.Quilometragem} Quilômetros.</span>
        }else{
            return<span>Faltam {10000 - (carro.quilometragem/10000)} Quilômetros para a revisão</span>
        }
    }
    return(
        <dialog ref = {ref} className={`CarroModal ${props.isOpen ? "open":""}`}>
            <div className="children">{props.children}</div>
            <h1 className="carroNome">{carro.modelo}</h1>
            <p className="carroInfo">Marca <span>{carro.marca}</span></p>
            <p className="carroInfo">Placa <span>{carro.placa}</span></p>
            <p className="carroInfo">Ano <span>{carro.ano}</span></p>
            <p className="carroInfo">Quilometragem <span>{carro.quilometragem}</span></p>
            <p className="carroInfo">Chassi <span>{carro.chassi}</span></p>
            <p className="carroInfo">Revisão dos 10000 Quilômetros {revisao()}</p>
        </dialog>
    )
}

export default CarroModal