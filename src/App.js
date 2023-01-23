import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackgroundContainer from './containers/BackgroundContainer'
import ItemListContainer from './containers/ItemListContainer';
import TikTokContainer from './containers/TikTokContainer';
import ItemDetail from './components/ItemDetail';
import './styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <BackgroundContainer>
        <Routes>
          <Route path={'/'} element={<ItemListContainer />} />
          <Route path={'/trends'} element={<TikTokContainer />} />
          <Route path={'/detail'} element={<ItemDetail />} />
        </Routes>
      </BackgroundContainer>
    </BrowserRouter>
  );
}
export default App;
