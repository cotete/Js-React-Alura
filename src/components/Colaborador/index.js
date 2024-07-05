import './colaborador.css'


const Colaborador = (props) =>{


    let src = `https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/${props.champ}.png`
    

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor:props.cor}}>
                <img src={src} alt='Imagem do usuário'></img>
            </div>
            <div className='rodape'>
                <h3>{props.nome}</h3>
                <h4>{props.champ}</h4>
                <h5>{props.lane}</h5>
            </div>
        </div>
    )
}

export default Colaborador