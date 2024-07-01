import Formulario from "../../components/Formulario";
import ListaParticipantes from "../../components/ListaParticipantes";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";

const MainPage = () => {
  return (
    <>
      <Titulo>
        Vamos Começar!
      </Titulo>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </>
  );
}

export default MainPage;