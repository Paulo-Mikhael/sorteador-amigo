import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";

jest.mock('../state/hooks/useListaParticipantes', () => { //O Jest "importa" este diretório
  return {
    useListaParticipantes: jest.fn() //useListaParticipantes é uma função "mockada" para teste
  };
});

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => { //O Jest "importa" a lib react-router-dom
  return {
    useNavigate: () => mockNavegacao //useNavigate é uma função "mockada" para teste
  };
});

describe('onde não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });
  test('a brincadeira não pode ser iniciada', () => {
    render(<RecoilRoot>
      <Rodape />
    </RecoilRoot>);

    const botao = screen.getByRole('button');

    expect(botao).toBeDisabled();
  });
});

describe('onde existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina']);
  });
  test('a brincadeira pode ser iniciada', () => { //Para este teste dar certo, é necessário realizar a
    render(<RecoilRoot>                         {/* navegação pelo useNavigate() */}
      <Rodape />
    </RecoilRoot>);

    const botao = screen.getByRole('button');
    fireEvent.click(botao);
    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
  });
});