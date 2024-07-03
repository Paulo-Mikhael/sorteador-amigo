import { atom } from "recoil";

export const listaDeParticipantesState = atom<string[]>({
  key: 'listaDeParticipantesState',
  default: []
});

export const erroState = atom<string>({
  key: 'erroState',
  default: ""
});

export const sorteioState = atom<Map<string, string>>({
  key: 'sorteioState',
  default: new Map()
});