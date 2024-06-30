import styled from "styled-components";

const StyledDiv = styled.div`
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
    bottom: -31px;
  }
`

const Cabecalho = () => {
  return (
    <StyledDiv>
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
    </StyledDiv>
  );
}

export default Cabecalho;