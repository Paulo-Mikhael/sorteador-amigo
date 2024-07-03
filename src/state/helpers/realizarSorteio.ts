import shuffle from "just-shuffle";

export const realizarSorteio = (participantes: string[]): Map<string, string> => {
  const totalParticipantes = participantes.length;
  const embaralhado = shuffle(participantes);
  const resultado = new Map<string, string>();

  for (let index = 0; index < totalParticipantes; index++) {
    const indiceAmigo = index === (totalParticipantes - 1) ? 0 : index + 1;
    resultado.set(embaralhado[indiceAmigo], embaralhado[index]);
  }

  return resultado;
}