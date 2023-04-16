import imageRickMorty from './img/rick-morty.png'
import faceboock from './img/facebook.png'
import youtube from './img/youtube.png'
import twitter from './img/gorjeo.png'
import "./App.css"
import { useState } from 'react';
import Characters from './components/characters';


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
      <h1 className="title">By Rodrigo Mencias Gonzalez</h1>
      <h1 className="title">Zs20006748</h1>

      </header>



      <footer>


      <div className="social-icons">
        
        <a href="https://twitter.com/rodrigomencias2"><img src={twitter} alt="Twitter"/></a>
        <a href="https://www.facebook.com/rodrigo.mencias.73/"><img src={faceboock} alt="Facebook" /></a>
        <a href="https://www.youtube.com/channel/UCOq5scgXfhV-muBmO3G3yKg"><img src={youtube} alt="Youtube" /></a>
      </div>
    </footer>
    </div>
    
  );
}

export default App;
