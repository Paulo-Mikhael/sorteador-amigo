import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";
import styled from "styled-components";

const StyledForm = styled.form`
  background-color: white;
  border-radius: 37.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  box-shadow: 4px 4px 0px black;

  input, button{
    font-size: 16px;
    border: none;
    padding: 25px;
  }
  button{
    background-color: #C4C4C4;
    border-radius: 0px 37.5px 37.5px 0px;
    width: 200px;
    color: black;
    cursor: pointer;
  }
  input{
    width: 500px;
    font-weight: 400;
    padding-left: 20px;
    border-radius: 37.5px 0px 0px 37.5px;

    &:focus{
      outline: none;
    }
  }
  img{
    margin-left: 20px;
    width: 24px;
  }
`
const StyledP = styled.p`
  margin-top: 15px;
  color: red;
  font-size: 20px;
  font-weight: bold;
`

const Formulario = () => {
  const [nome, setNome] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionarNaLista = useAdicionarParticipante();
  const mensagemDeErro = useMensagemDeErro();
  const adicionarParticipante = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    adicionarNaLista(nome);
    setNome('');
    inputRef.current?.focus();
  }

  return (
    <>
      <StyledForm onSubmit={(evt: React.FormEvent<HTMLFormElement>) => adicionarParticipante(evt)}>
        <label htmlFor="input-adicionar">
          <img src="images/adicionar.png" alt="adicionar usuário" />
        </label>
        <input
          id="input-adicionar"
          ref={inputRef}
          value={nome}
          onChange={(evt) => setNome(evt.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>
          Adicionar
        </button>
      </StyledForm>
      {mensagemDeErro && <StyledP role="alert">
        {mensagemDeErro}
      </StyledP>}
    </>
  );
}

export default Formulario;