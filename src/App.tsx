import styled from 'styled-components';
import Formulario from './components/Formulario/Formulario';
const Cabecalho = styled.div`
  width: 100%;
  height: 454px;
  position: relative;

  img{
    position: absolute;
  }
  .logo{
    top: 123px;
    left: 160px;
  }
  .player{
    left: 500px;
    bottom: -30px;
  }
`
const StyledMain = styled.main`
  background-color: white;
  width: 99.7%;
  height: 557px;
  border-radius: 60px 60px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 87px;
  border: 3px solid black;
`

function App() {
  return (
    <>
      <Cabecalho>
        <img 
          src="images/logo-amigo-secreto.png" 
          alt="logo amigo secreto" 
          className="logo"
        />
        <img 
          src="images/participante.png" 
          alt="imagem de uma pessoa desenhada vendo uma lista em um tablet" 
          className="player"
        />
      </Cabecalho>
      <StyledMain>
        <Formulario />
      </StyledMain>
    </>
  );
}

export default App;
