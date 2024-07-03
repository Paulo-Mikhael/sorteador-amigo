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

  @media screen and (max-width: 900px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .logo, .player{
      position: initial;
    }
    .logo{
      margin-top: 10px;
      width: 330px;
      height: 157px;
    }
    .player{
      margin-top: 9pc;
      height: 368px;
      width: 360px;
    }
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