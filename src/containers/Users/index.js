import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';

import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from './styles';

const Users = () => {
  //const users = [];
  const [users, setUsers] = useState([]);
  const history = useHistory()


  //Um estado no React e IMUTAVEL.
  //REACT HOOKS => Ferramentas auxiliares


  //spread operator 3 pontinho ...




useEffect(() => {  //userEffect nao aceita async
  async function fetchUsers() {
    const { data: newUsers } = await axios.get("http://localhost:3001/users");

    setUsers(newUsers);

  }
  fetchUsers();

}, []);
// REACT HOOK => userEffect (Efeito Colateral)
// A minha aplicacao inicia (A pagina carregou, useEffect e chamado!)
// Quando um estado que esta no array de dependencia do useEffect e alterado


async function deleteUser(userId) {
  await axios.delete(`http://localhost:3001/users/${userId}`)

  const newUsers = users.filter(user => user.id !== userId)
  setUsers(newUsers)
}

function goBackPage(){
  history.push('/')
}

return (
  <Container>
    <Image alt="logo-imagem" src={Avatar}/>
    <ContainerItens>
      <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}         

export default Users;