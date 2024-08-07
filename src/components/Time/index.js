
import Colaborador from '../Colaborador'
import './Time.css'

let lista =[]

const Time = (props)=>{
    
    if(sessionStorage.length > 0){
        lista = JSON.parse(sessionStorage.getItem("lista_de_colaboradores"))
    }


    return(
        props.colaboradores.length > 0 ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBottomColor : props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>  <Colaborador cor = {props.corPrimaria} key = {colaborador.nome} nome = {colaborador.nome} rank ={colaborador.rank} user = {colaborador.usuario} time = {colaborador.time} lane = {colaborador.lane} champ = {colaborador.champ}></Colaborador>)}
            </div>
 
        </section>
        : ""
    )
}

export default Time