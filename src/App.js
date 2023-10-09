import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import Demo from './Demo';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <DataProvider>
      <Header />
        <Box style={{ marginTop: "55px" }}>
          <Routes>
            <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<DetailPage />} />
          <Route path='/cart' element={<Cart/>}/> 
          </Routes>
        </Box>

    </DataProvider>
    // <>
    // <Demo/>
    // </>
  );
}

export default App;
