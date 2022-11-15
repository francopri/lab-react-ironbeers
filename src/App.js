import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import DetailsBeerPage from './pages/DetailsBeerPage';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeersPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage'
import { Toaster } from 'react-hot-toast'
import EditBeerPage from './pages/EditBeerPage';



function App() {

  return (

    <div className="app-container">

      <Toaster />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/beers/:beerID" element={<DetailsBeerPage />} />
        <Route path="/beers/:beerID/edit" element={<EditBeerPage />} />
        <Route path="/random-beer" element={<RandomBeersPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />

      </Routes>

    </div>
  );
}

export default App;
