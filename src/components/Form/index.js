import TextArea from '../TextArea'
import './Form.css'

const Form = ()=>{
    return(
        <section className='Form'>
            <form>
                <h2>Preencha os dados para criar o card do membro do time</h2>
                <TextArea label = "Nome" placeholder = "Digite o seu nome"/>
                <TextArea label = "Cargo" placeholder = "Digite o seu cargo"/>
                <TextArea label = "Imagem" placeholder = "Digite o endereço da imagem"/>
            </form>
        </section>
    )
    
}

export default Form