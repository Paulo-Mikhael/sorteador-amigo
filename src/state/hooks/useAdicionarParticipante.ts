import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantesState } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaDeParticipantesState);
  const lista = useRecoilValue(listaDeParticipantesState);
  const setMensagemErro = useSetRecoilState(erroState);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)){
      setMensagemErro("Nomes duplicados não são permitidos!");
      setTimeout(() => {
        setMensagemErro("");
      }, 5000);
      return;
    }

    return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
  }
}