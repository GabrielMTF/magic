import React, { useState } from 'react';
import BasicInput from '../components/input';
import BasicButton from '../components/button';
import { Container, ContainerCards } from './styles';
import api from '../services/api';

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
    <Container >
      <BasicInput setSearch={setSearch} />
      <BasicButton Pesquisar={Pesquisar} />
      <div>
        {resultado.map((cards) =>
          <ContainerCards>
            <p>{cards.name}</p>
            <img src={cards.image_uris.normal} />
            
          </ContainerCards>
        )}
      </div>
    </Container>
  )
}

export default App;