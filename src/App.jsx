import React from 'react'
import HeroSection from './pages/HeroSection';
import NavBar from './component/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Market from './pages/Market';
import Trending from './pages/Trending';
import Search from './pages/Search';
import CryptoHistory from './pages/CryptoHistory';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<HeroSection />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/market'} element={<Market />} />
        <Route path={'/trending'} element={<Trending />} />
        <Route path={'/search'} element={<Search />} />
        <Route path={"/coin/:id"} element={<CryptoHistory />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App