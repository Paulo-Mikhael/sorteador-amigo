import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

describe('o comportamento do Formulario.tsx', () => {
  test('quando o input estiver vazio o botão deverá estar desabilitado', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('adicionando um participante caso exista um nome preenchido', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });

    fireEvent.click(button);

    expect(input).toHaveFocus();

    expect(input).toHaveValue("");
  });

  test('mostrar mensagem de erro ao tentar adicionar um nome existente na lista', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });

    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });

    fireEvent.click(button);

    const mensagemDeErro = screen.getByRole('alert');

    expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!');
  });

  test('a mensagem de erro deve desaparecer após um tempo determinado', () => {
    jest.useFakeTimers();
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });

    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    });

    fireEvent.click(button);

    let mensagemDeErro = screen.queryByRole('alert');

    expect(mensagemDeErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole('alert');

    expect(mensagemDeErro).toBeNull();
  });
});