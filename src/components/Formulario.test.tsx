import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

test('quando o input estiver vazio o botão deverá estar desabilitado', () => {
  render(<Formulario />);

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const button = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});