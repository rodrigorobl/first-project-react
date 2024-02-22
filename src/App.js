import Reac from "react";

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button
} from './styles';

const App = () => {
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="seta" src={Arrow} /></Button>

      </ContainerItens>
    </Container>
  );
}

export default App;