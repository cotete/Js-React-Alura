
import { useState } from "react";
import BtnAddCarro from "./BtnAddCarro"
import CarroCard from "./CarroCard"
import "./carros.css"
let listaCarros = []


const Carros = (props)=>{
    //Preciso fazer o modal disso aqui nn esquecer <CarrosModal/>
    const [carros, setCarros] = useState(props.carros);

    const adicionarLista = (carro) => {
        setCarros([...carros, carro]);
        listaCarros.push(carro)
        console.log(listaCarros)
    };


    return(
        listaCarros.length > 0?
        <div className="carros-container">
            <div className="header">
            <h1 className="carros-h1">Carros</h1>
            <BtnAddCarro onAddCarro={adicionarLista}></BtnAddCarro>
            </div>
            <div className="carros-area">   
                {listaCarros.map(carro =><CarroCard key={carro.carro} carro = {carro} nome = {carro.modelo}/>)}
            </div>
        </div>:
        <div className="carros-container">
            <h1 className="carros-h1">Carros</h1>
            <div className="carros-nocars">
                <h1>Você ainda não possui nenhum carro Cadastrado</h1>
                <BtnAddCarro onAddCarro={adicionarLista}></BtnAddCarro>
            </div>
        </div>
    )

}

export default Carros