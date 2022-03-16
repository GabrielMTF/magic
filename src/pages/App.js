import React, { useState } from 'react';
import BasicInput from '../components/input';
import BasicButton from '../components/button';
import CardArea from '../components/cardarea';
import { Container } from './styles';
import api from '../services/api';

const App = () => {

  const [search, setSearch] = useState('');
  const [resultado, setResultado] = useState([]);

  const fetchMagicCards = () => {
    api.get(`/cards/search?as=grid&order=name&q=${search}`)
      .then(response => {
        setResultado(response.data.data)
        console.log(response.data.data);
      })
  }

  const Pesquisar = () => {
    fetchMagicCards()
  }

  return (
    <div>
    <Container >
      <BasicInput setSearch={setSearch} />
      <BasicButton Pesquisar={Pesquisar} />
    </Container>
    <CardArea resultado={resultado} />
    
    </div>
  )
}

export default App;