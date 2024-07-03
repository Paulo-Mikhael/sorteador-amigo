import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import styled from "styled-components";
import { useSorteador } from "../state/hooks/useSorteador";
import Botao from "./Botao";

const StyledFooter = styled.footer`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media screen and (max-width: 900px){
    width: 100%;
  }
  @media screen and (max-width: 600px){
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

const Rodape = () => {
  const participantes = useListaParticipantes();
  const navegarPara = useNavigate();
  const sortear = useSorteador();

  function iniciar(){
    sortear();
    navegarPara('/sorteio');
  }

  return (
    <StyledFooter>
      <Botao 
        disabled={participantes.length < 3}
        onClick={() => iniciar()}
      >
        <img src="images/img-botao.png" alt="ícone de reproduzir" />
        Iniciar brincadeira
      </Botao>
      <img src="images/sacolas.png" alt="sacolas" />
    </StyledFooter>
  );
}

export default Rodape;