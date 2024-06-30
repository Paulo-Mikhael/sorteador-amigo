import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";

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
    <form onSubmit={evt => adicionarParticipante(evt)}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(evt) => setNome(evt.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>
        Adicionar
      </button>
      {mensagemDeErro && <p role="alert">
        {mensagemDeErro}
      </p>}
    </form>
  );
}

export default Formulario;