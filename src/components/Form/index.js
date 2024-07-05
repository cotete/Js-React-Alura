import DropDown from '../DropDown'
import TextArea from '../TextArea'
import DropDownChampions from '../DropDownChampions'
import { useState } from 'react'

import './Form.css'
import BtnSubmit from '../BtnSubmit'

const Form = (props)=>{
    const [nome,setNome] = useState('')
    const [rank,setRank] = useState('')
    const [usuario,setUser] = useState('')
    const [lane,setLane]=useState('')
    const [champ,setChamp]=useState('')
    const [time,setTime]=useState('')

    const lanes =[
        'Top Laner',
        'Mid Laner',
        'Ad Carry',
        'Support',
        'Jungler'
    ]

const onSave = (e) =>{
    e.preventDefault()
    props.aoColaboradorCadastrado({
        nome,rank,usuario,time,lane,champ
    })
    setNome('')
    setRank('')
    setUser('')
    setTime('')
    setLane('')
    setChamp('')

}
return (
    <section className='Form'>
        <form onSubmit={onSave}>
            <h2>Preencha os dados para criar o card do membro do time</h2>
            <TextArea
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                obrigatorio={true}
                label="Nome"
                placeholder="Digite o seu nome"
            />
            <TextArea
                valor={rank}
                aoAlterado={valor => setRank(valor)}
                obrigatorio={true}
                label="Rank"
                placeholder="Digite o seu Rank"
            />
            <TextArea
                valor={usuario}
                aoAlterado={valor => setUser(valor)}
                obrigatorio={true}
                label="Usuario"
                placeholder="Digite o seu Usuário do lol, junto com a Hashtag"
            />
            <DropDown
                aoAlterado={valor => setTime(valor)}
                valor={time}
                required={true}
                label="Time"
                itens={props.times}
            />
            <DropDown
                aoAlterado={valor => setLane(valor)}
                valor={lane}
                required={true}
                label="Lane"
                itens={lanes}
            />
            <DropDownChampions
                aoAlterado={valor => setChamp(valor)}
                valor={champ}
                required={true}
                label="Campeão"
            />
            <BtnSubmit texto="Enviar Card" />
        </form>
    </section>
)
}

export default Form