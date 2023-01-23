import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import TikTokContainer from './components/containers/TikTokContainer';
import ItemDetail from './components/ItemDetail';
import BackgroundContainer from './components/containers/BackgroundContainer';
import './styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <BackgroundContainer>
        <Routes>
          <Route path={'/'} element={<ItemListContainer />} />
          <Route path={'/trends'} element={<TikTokContainer />} />
          <Route path={'/detail'} element={<ItemDetail/>} />
        </Routes>
      </BackgroundContainer>
    </BrowserRouter>
  );
}

export default App;
