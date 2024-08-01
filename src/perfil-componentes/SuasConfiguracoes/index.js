import InputsInfos from "../InputsInfos"
import UserProfile from "../UserProfile"
import "./suasConfiguracoes.css"


const SuasConfiguracoes = (props) =>{

    return(
        <div className="suasConfiguracoes">
            <UserProfile imgPath="https://avatars.githubusercontent.com/cotete" nome={props.nomeUser} seguro="Porto Seguro"></UserProfile>
            <InputsInfos nome = "Nome Completo" infoUser = {props.nomeUser}></InputsInfos>
            <InputsInfos nome = "Email" infoUser = {props.emailUser}></InputsInfos>
            <InputsInfos nome = "Senha" infoUser = {props.senhaUser}></InputsInfos>
            <InputsInfos nome = "CPF" infoUser = {props.cpfUser}></InputsInfos>
            <InputsInfos nome = "Data de Nascimento" infoUser = {props.dataUser}></InputsInfos>
        </div>
    )
}

export default SuasConfiguracoes