import Banner from './components/Banner';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextArea label = "Nome" placeholder = "Digite o seu nome"/>
      <TextArea label = "Cargo" placeholder = "Digite o seu cargo"/>
      <TextArea label = "Imagem" placeholder = "Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
