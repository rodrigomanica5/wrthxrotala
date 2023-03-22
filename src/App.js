import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackgroundContainer from './containers/BackgroundContainer'
import ItemListContainer from './containers/ItemListContainer';
import TrendsContainer from './containers/TrendsContainer';
import ItemDetail from './components/ItemDetail';
import './styles/styles.css';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <BrowserRouter>
      <BackgroundContainer>
        <Routes>
          <Route path={'/'} element={<HomeContainer/>} />
          <Route path={'/corset/:productId'} element={<ItemListContainer />} />
          <Route path={'/t-shirt/:productId'} element={<ItemListContainer />} />
          <Route path={'/trends'} element={<TrendsContainer />} />
          <Route path={'/detail/:productId'} element={<ItemDetail />} />
        </Routes>
      </BackgroundContainer>
    </BrowserRouter>
  );
}
export default App;
