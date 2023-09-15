import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDirectoryPage from './pages/campsitesDirectoryPage';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';

function App() {
  return (
    <div className ='App'>
      <Header />
      <Routes>
        <Route path ='/' element = {<HomePage />} />
        <Route path = 'contact' element = {<ContactPage />}/>
        <Route path = 'directory' element = {<CampsiteDirectoryPage />} />
        <Route
          path='directory/:campsiteId'
          element={ <CampsiteDetailPage /> }  />
      </Routes>
      <Footer />
    </div>

    )
}

export default App;
