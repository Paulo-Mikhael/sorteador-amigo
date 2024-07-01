import styled from "styled-components";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";

const StyledUl = styled.ul`
  list-style: none;
  margin: 30px 0px;
  text-align: center;

  li{
    font-size: 20px;
    font-weight: 400;
    color: #444444;
  }
`

const ListaParticipantes = () => {
  const participantes: string[] = useListaParticipantes();

  return (
    <StyledUl>
      {participantes.map(participante => (
        <li key={participante}>
          {participante}
        </li>
      ))}
    </StyledUl>
  );
}

export default ListaParticipantes;