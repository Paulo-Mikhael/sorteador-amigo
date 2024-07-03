import { fireEvent, queryByRole, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import Sorteio from "./Sorteio";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";
import { act } from "react-dom/test-utils";

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
  test('o nome do amigo secreto some após algum tempo', () => {
    jest.useFakeTimers();
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>);

    const select = screen.getByPlaceholderText('Selecione seu nome');
    const botao = screen.getByRole('button');

    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    });

    fireEvent.click(botao);

    let alerta = screen.queryByRole('alert');
    expect(alerta).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    alerta = screen.queryByRole('alert');
    expect(alerta).toBeNull();
  });
});