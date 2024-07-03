import { realizarSorteio } from "./realizarSorteio";

describe('dado uma lista de participantes', () => {
  test('um participante não poderá sortear o próprio nome', () => {
    const participantes = [
      'Ana',
      'Catarina',
      'Clara',
      'Júlio',
      'Paulo',
      'Robson'
    ]

    const sorteio = realizarSorteio(participantes);

    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});