import Formulario from './components/Formulario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Cabecalho from './components/Cabecalho';
import MainBackground from './components/MainBackground';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Cabecalho />
        <Routes>
          <Route path='/' element={<MainBackground />}>
            <Route index element={<Formulario />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
