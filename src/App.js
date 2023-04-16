import imageRickMorty from './img/rick-morty.png'
import "./App.css"
import { useState } from 'react';
import Characters from './components/characters';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & MOrty' className='img-home' />
            <button onClick={reqApi} className='btn-search'>
              Buscar personajes
            </button>
          </>
        )

        };


      </header>
    </div>
    
  );
}

export default App;
