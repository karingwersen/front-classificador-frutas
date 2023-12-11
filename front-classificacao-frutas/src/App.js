import logo from './logo.svg';
import './App.css';
import { ClassificadorFruta } from './ClassificadorFruta';
import maca from "./maca.svg"
import tangerina from "./tangerina.svg"
import laranja from "./laranja.svg"
import limao from "./limao.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quer saber que fruta é essa?</h1>
        <div className="classificadorFruta">
          <img src={maca} id='imagemMaca' />
          <img src={tangerina} id='imagemTangerina' />
          <ClassificadorFruta />
          <img src={laranja} id='imagemLaranja' />
          <img src={limao} id='imagemLimao' />
        </div>
      </header>
    </div>
  );
}

export default App;
