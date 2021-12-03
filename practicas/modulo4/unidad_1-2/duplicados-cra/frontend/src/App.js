import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//componentes
import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Nosotros from './pages/Nosotros';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route></Route>
          </Routes>
        </Router>

      </>
  );
}

export default App;
