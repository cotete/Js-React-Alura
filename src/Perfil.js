import { useState } from 'react'
import './css-pages/perfil.css'
import Links from './perfil-componentes/Links'
import SuasConfiguracoes from './perfil-componentes/SuasConfiguracoes'
import Carros from './perfil-componentes/Carros'
import Acessibilidade from './perfil-componentes/Acessibilidade'


const Perfil = () =>{

    const [conteudo,setConteudo] = useState('Suas Configuracoes')
    const [modo, setModo] = useState(() =>{
        const saved = localStorage.getItem("check");
        return saved !== null ? JSON.parse(saved) : true;
    })
    
    const listaCarros =[
    ]

    
    

    const changeModo = (modo)=>{
        setModo(modo)
    }


    let conteudoChanger = () => {
        switch(conteudo){
            case('Suas Configuracoes'):
                return <SuasConfiguracoes nomeUser = "nome" senhaUser = "123456" cpfUser="123.123.123-12" emailUser = "coisa@gmail.com" dataUser="26/10/2005"/>
            case('Acessibilidade'):
                return  <Acessibilidade modo = {changeModo}/>
            case('Endereço'):
                return <h1>endereco</h1>
            case('Carros'):
                return <Carros carros = {listaCarros} />
        }
            
    }

    return(
        <div className={`container ${modo ? "escuro":""}`}>
            <div className='left'>
                <nav>
                    <Links onClick ={ () => setConteudo('Suas Configuracoes')} name ="Suas Configurações" />
                    <Links name="Acessibilidade" onClick={() => setConteudo('Acessibilidade')} />
                    <Links name="Endereço" onClick={() => setConteudo('Endereço')} />
                    <Links name="Carros" onClick={() => setConteudo('Carros')} />
                </nav>
            </div>
            <div className='right'>
                {conteudoChanger()}
            </div>

        </div>
    )
}
export default Perfil