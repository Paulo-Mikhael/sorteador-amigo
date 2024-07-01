import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  
  button{
    background-color: #FE652B;
    border: 2px solid black;
    font-weight: 600;
    font-size: 20px;
    padding: 18px 40px;
    color: #FFF;
    border-radius: 37.5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;
    box-shadow: 4px 4px 0px black;

    img{
      width: 40px;
    }
  }
`

const Rodape = () => {
  const participantes = useListaParticipantes();
  const navegarPara = useNavigate();

  function iniciar(){
    navegarPara('/sorteio');
  }

  return (
    <StyledFooter>
      <button 
        disabled={participantes.length < 3}
        onClick={() => iniciar()}
      >
        <img src="images/img-botao.png" alt="ícone de reproduzir" />
        Iniciar brincadeira
      </button>
      <img src="images/sacolas.png" alt="sacolas" />
    </StyledFooter>
  );
}

export default Rodape;