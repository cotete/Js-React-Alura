import { useEffect, useRef} from "react";
import FormAddCarro from "../FormAddCarro";
import "./ModalAddCarro.css"


const ModalAddCarro = (props)=>{

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

    const handleCarroCadastrado = (carro)=>{
        props.onAddCarro(carro)
        console.log(carro)
    }

    return(
        <dialog ref = {ref} className={`CarroAddModal ${props.isOpen ? "open":""}`}>
            <div className="children">{props.children}</div>
            <FormAddCarro onCarroCadastrado={handleCarroCadastrado}/>
        </dialog>
    )
}

export default ModalAddCarro