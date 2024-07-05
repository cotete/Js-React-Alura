import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';


function App() {
  const[colaboradores,setColaboradores] = useState([])
  const times=[
  {
    nome:'Time 1',
    corPrimaria:'#4d5fb1',
    corSecundaria:'#cfd7fc'
  },
  {
    nome:'Time 2',
    corPrimaria:'#9757c2',
    corSecundaria:'#e9d9f7'
  },
  {
    nome:'Time 3',
    corPrimaria:'#c25795',
    corSecundaria:'#f7d9e7'
  },
  {
    nome:'Time 4',
    corPrimaria:'#c25769',
    corSecundaria:'#f8cfd6'
  },
  {
    nome:'Time 5',
    corPrimaria:'#b9a961',
    corSecundaria:'#fdf7db'
  },
]
  const aoNovoColaborador = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Form times = {times.map(time => time.nome)} aoColaboradorCadastrado ={colaborador => aoNovoColaborador(colaborador)} />
      {times.map(time=> <Time key={time.nome} colaboradores = {colaboradores.filter(colaborador=>colaborador.time === time.nome)} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}></Time>)}
    </div>
  );
}

export default App;
