import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDirectoryPage from './pages/campsitesDirectoryPage';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import './App.css';
import { fetchCampsites } from './features/campsites/campsitesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
  }, [dispatch]); 

  return (
    <div className ='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />}/>
        <Route path='directory' element={<CampsiteDirectoryPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route
          path='directory/:campsiteId'
          element={ <CampsiteDetailPage /> }  />
      </Routes>
      <Footer />
    </div>

    )
}

export default App;
