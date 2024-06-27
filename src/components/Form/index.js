import DropDown from '../DropDown'
import TextArea from '../TextArea'
import DropDownChampions from '../DropDownChampions'

import './Form.css'

const Form = ()=>{

    const times =[
        'Top Laner',
        'Mid Laner',
        'Ad Carry',
        'Support',
        'Jungler'
    ]
    return(
        <section className='Form'>
            <form>
                <h2>Preencha os dados para criar o card do membro do time</h2>
                <TextArea label = "Nome" placeholder = "Digite o seu nome"/>
                <TextArea label = "Rank" placeholder = "Digite o seu Rank"/>
                <TextArea label = "Usuario" placeholder = "Digite o seu Usuário do lol, junto com a Hashtag"/>
                <DropDown label = "Lane" itens = {times}></DropDown>
                <DropDownChampions label = "Campeão"></DropDownChampions>
            </form>
        </section>
    )
    
}

export default Form