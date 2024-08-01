import {Routes, Route, Link } from "react-router-dom";
import Perfil from './Perfil';
import NavBar from './components/NavBar/NavBar';
import Principal from './Principal';


function App() {

  
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" Component={Principal}></Route>
        <Route exact path='/perfil' Component={Perfil}/>
        <Route exact path="/principal" Component={Principal}></Route>
      </Routes>
    </div>
  );
}

export default App;
