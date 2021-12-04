
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//estilos
import './App.css';
import './styles/componentes/layout/Header.css';
import './styles/componentes/layout/Footer.css';
import './styles/componentes/pages/Home.css';
import './styles/componentes/pages/Product.css';
import './styles/componentes/pages/Service.css';
import './styles/componentes/pages/Nosotros.css';
import './styles/componentes/pages/Contact.css';

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
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Product" exact element={<Product />} />
          <Route path="/Nosotros" exact element={<Nosotros />} />
          <Route path="/Service" exact element={<Service />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
