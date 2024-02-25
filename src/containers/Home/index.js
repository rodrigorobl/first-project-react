import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';


import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,

} from './styles';

const App = () => {
  //const users = [];
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  //Um estado no React e IMUTAVEL.
  //REACT HOOKS => Ferramentas auxiliares

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser]);
    //spread operator 3 pontinho ...

    history.push('/usuarios')

  }


  // REACT HOOK => userEffect (Efeito Colateral)
  // A minha aplicacao inicia (A pagina carregou, useEffect e chamado!)
  // Quando um estado que esta no array de dependencia do useEffect e alterado
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App;