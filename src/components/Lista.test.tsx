import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";

jest.mock("../state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn()
  }
});

describe('uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });
  test('deve ser renderizada sem elementos', () => {
    render(<RecoilRoot>
      <ListaParticipantes />
    </RecoilRoot >);

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  });
});
describe('uma lista preenchida de participantes', () => {
  const participantes = ["Ana", "Catarina"];
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test('deve ser renderizada com os elementos da lista de participantes', () => {
    render(<RecoilRoot>
      <ListaParticipantes />
    </RecoilRoot >);

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(participantes.length);
  });
});