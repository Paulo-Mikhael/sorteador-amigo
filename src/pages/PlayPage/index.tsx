import Sorteio from "../../components/Sorteio";
import Titulo from "../../components/Titulo";

const PlayPage = () => {
  return (
    <>
      <Titulo>
        Quem vai tirar o papelzinho?
      </Titulo>
      <Sorteio />
      <img src="images/aviao.png" alt="aviãozinho" />
    </>
  );
}

export default PlayPage;