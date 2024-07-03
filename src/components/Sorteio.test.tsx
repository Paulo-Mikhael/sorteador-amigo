import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import Sorteio from "./Sorteio";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";

jest.mock('../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
});
jest.mock('../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn()
  }
});

describe('na página de participantes', () => {
  const participantes = [
    'Ana',
    'Catarina',
    'Julia'
  ]
  const resultado = new Map([
    ['Ana', 'Catarina'],
    ['Catarina', 'Julia'],
    ['Julia', 'Ana']
  ]);
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test('cada participante pode ver seu amigo secreto', () => {
    render (<RecoilRoot>
      <Sorteio />
    </RecoilRoot>);

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participantes.length + 1); // + Default option
  });
  test('o amigo secreto é exibido quando solicitado', () => {
    render (<RecoilRoot>
      <Sorteio />
    </RecoilRoot>);

    const select = screen.getByPlaceholderText('Selecione seu nome');
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    });

    const botao = screen.getByRole('button');
    fireEvent.click(botao);
    const amigoSecreto = screen.getByRole('alert');
    expect(amigoSecreto).toBeInTheDocument();
  });
});