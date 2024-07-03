import shuffle from "just-shuffle";
import { useListaParticipantes } from "./useListaParticipantes";
import { useSetRecoilState } from "recoil";
import { sorteioState } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";

export const useSorteador = () => {
  const participantes = useListaParticipantes();
  const setResultado = useSetRecoilState(sorteioState);

  return () => {
    const resultado = realizarSorteio(participantes);

    setResultado(resultado);
  };
}