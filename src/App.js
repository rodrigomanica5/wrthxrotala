import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackgroundContainer from './components/Containers/BackgroundContainer';
import ItemListContainer from './components/Containers/ItemListContainer';
import TikTokContainer from './components/Containers/TikTokContainer';
import ItemDetail from './components/ItemDetail';
import './styles/styles.css'

function App() {
  return (
    <BrowserRouter>
      <BackgroundContainer>
        <Routes>
          <Route path={'/'} element={<ItemListContainer />} />
          <Route path={'/tendencias'} element={<TikTokContainer />} />
          <Route path={'/detail'} element={<ItemDetail />} />
        </Routes>
      </BackgroundContainer>
    </BrowserRouter>
  );
}

export default App;
