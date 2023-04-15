import imageRickMorty from './img/rick-morty.png'
import "./App.css"
import {BrouserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  const reqApi =() =>{
    console.log("Clicking");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & morty</h1>
        <img src={imageRickMorty} alt='Rick & MOrty' className='img-home' />
        <button onClick={reqApi} className='btn-search'>
          Buscar personajes
        </button>
      </header>
    </div>
  );
}

export default App;
