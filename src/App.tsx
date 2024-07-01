import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Cabecalho from './components/Cabecalho';
import MainBackground from './components/MainBackground';
import MainPage from './pages/MainPage';
import PlayPage from './pages/PlayPage';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Cabecalho />
        <Routes>
          <Route path='/' element={<MainBackground />}>
            <Route index element={<MainPage />} />
            <Route path='sorteio' element={<PlayPage />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
