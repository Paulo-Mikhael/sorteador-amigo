import { useRef, useState } from "react";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";
import styled from "styled-components";
import Botao from "./Botao";

const StyledForm = styled.form`
  width: 468px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  select{
    -webkit-appearance: none;
    appearance: none;
    padding: 19px 25px;
    box-shadow: 4px 4px 0px black;
    border-radius: 37.5px;
    border: 2px solid black;
    width: 100%;
    font-size: 20px;
    margin-bottom: 32px;

    &:focus{
      outline: none;
    }
  }
  i{
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    top: 23px;
    right: 30px;
    transition: all .3s;
  }
  p{
    color: #444444;
    font-weight: 400;
    font-size: 20px;
    text-align: center;

    &[role="alert"]{
      color: #FE652BFC;
      font-size: 25px;
      font-weight: 400;
    }
  }
  button{
    margin: 25px 0px;
  }

  @media screen and (max-width: 600px){
    select{
      width: 340px;
    }
    p{
      width: 340px;
    }
  }
`

const Sorteio = () => {
  const participantes = useListaParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const resultado = useResultadoSorteio();
  const sortear = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
      setTimeout(() => {
        setAmigoSecreto('');
      }, 5000);
    }
  }

  return (
    <section>
      <StyledForm onSubmit={(evt: React.FormEvent<HTMLFormElement>) => sortear(evt)}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione seu nome"
          value={participanteDaVez}
          onChange={(evt) => setParticipanteDaVez(evt.target.value)}
        >
          <option>Selecione seu nome</option>
          {participantes.map(participante => (
            <option key={participante} value={participante}>
              {participante}
            </option>
          ))}
        </select>
        <p>
          Clique em em sortear para ver quem é seu amigo secreto!
        </p>
        <Botao type="submit">
          Sortear!
        </Botao>
        {amigoSecreto && (
          <p role="alert">
            {amigoSecreto}
          </p>
        )}
      </StyledForm>
    </section>
  );
}

export default Sorteio;