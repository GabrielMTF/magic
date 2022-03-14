import React, { useState } from 'react';
import api from './api';

const App = () => {

  const [search, setSearch] = useState('');
  const [resultado, setResultado] = useState([]);

  const fetchMagicCards = () => {
    api.get(`/cards/search?as=grid&order=name&q=${search}`)
      .then(response => {
        setResultado(response.data.data)
        console.log(resultado);
      })
  }

  const Pesquisar = () => {
    fetchMagicCards()
  }

  return (
    <div>
      <input type='text' placeholder='card name' onChange={e => setSearch(e.target.value)} />
      <button onClick={Pesquisar} >Pesquisar</button>
      <div>
        {resultado.map((cards) =>
          <div>
            <p>{cards.name}</p>
            <img src={cards.image_uris.normal}/>
            <p>Data da execução: 14/03/2022</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App;