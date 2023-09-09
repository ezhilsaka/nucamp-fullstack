import logo from './logo.svg';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import CampsitesList from './features/campsites/CampsitesList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className ='App'>
      <Header />
      <CampsitesList />
      <Footer />
    </div>

    )
}

export default App;
