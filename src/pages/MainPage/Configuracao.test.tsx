import { render } from "@testing-library/react";
import MainPage from ".";
import { RecoilRoot } from "recoil";

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
});

describe('configuração da Main page', () => {
  test('a pagina principal deve ser assim', () => {
    const { container } = render(<RecoilRoot>
      <MainPage />
    </RecoilRoot>);

    expect(container).toMatchSnapshot();
  });
});