import { useState } from "react"
import TextAreaCarro from "../TextAreaCarro"
import "./FormAddCarro.css"
import BtnSubmit from "../../../components/BtnSubmit"

const FormAddCarro = (props) =>{
    const [modelo,setModelo] = useState()
    const [marca,setMarca] = useState()
    const [ano,setAno] = useState()
    const [chassi,setChassi] = useState()
    const [quilometragem,setQuilometragem] = useState()
    const [placa,setPlaca] = useState()

    const onSave = (e) => {
        e.preventDefault();
        const novoCarro = {
            modelo,
            marca,
            ano,
            chassi,
            quilometragem,
            placa
        };
        props.onCarroCadastrado(novoCarro);
    };
    return(
        <form onSubmit={onSave}>
            <TextAreaCarro
            value = {modelo}
            required={true}
            aoAlterado = {valor => setModelo(valor)}
            label = "Modelo"
            placeholder = "Digite o Modelo do seu carro aqui"/>
            <TextAreaCarro
            value = {marca}
            required={true}
            aoAlterado = {valor => setMarca(valor)}
            label = "Marca"
            placeholder = "Digite a Marca do seu carro aqui"/>
            <TextAreaCarro
            value = {ano}
            required={true}
            aoAlterado = {valor => setAno(valor)}
            label = "Ano"
            placeholder = "Digite o Ano do seu carro aqui"/>
            <TextAreaCarro
            value = {chassi}
            required={true}
            aoAlterado = {valor => setChassi(valor)}
            label = "Chassi"
            placeholder = "Digite o Chassi do seu carro aqui"/>
            <TextAreaCarro
            value = {quilometragem}
            required={true}
            aoAlterado = {valor => setQuilometragem(valor)}
            label = "Quilômetragem"
            placeholder = "Digite a Quilometragem do seu carro aqui"/>
            <TextAreaCarro
            value = {placa}
            required={true}
            aoAlterado = {valor => setPlaca(valor)}
            label = "Placa"
            placeholder = "Digite a Placa do seu carro aqui"/>
            <div className="BtnSubmit-area">
            <BtnSubmit texto="Cadastrar Carro"></BtnSubmit>
            </div>
        </form>
    )
}

export default FormAddCarro