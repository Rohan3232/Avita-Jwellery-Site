import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound';
import NavbarMain from './components/Navbar/NavbarMain';
import Footer from './components/Footer/Footer';
import ContactUs from './components/Support/ContactUs';
import Cart from './components/Cart.js';
import Products from './components/Products/Products.js';
import FAQ from './components/Support/FAQ';
import ProductDetails from './components/Products/ProductDetails';
import TermsCond from './components/Support/TermsCond';
import PrivacyPolicy from './components/Support/PrivacyPolicy';
import TryAtHome from './components/Support/TryAtHome';
import SearchPage from './components/SearchPage.js';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:8000/';
axios.defaults.withCredentials=true;
function App() {
  return (
    <div className="App">
      <Router>
        <div className="Header-Top">
          <NavbarMain />
        </div>

        <div className="Body">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/Cart/shopping-cart" element={<Cart cart={'shopping-cart'}/>}/>
            <Route path="/Cart/try-at-home" element={<Cart cart={'try-at-home'}/>}/>
            <Route path="/FAQ" element={<FAQ/>}/>
            <Route path="/TermsCond" element={<TermsCond/>}/>
            <Route path="/Privacy" element={<PrivacyPolicy/>}/>
            <Route path="/TryAtHome" element={<TryAtHome/>}/>
            <Route path="/Offers/:category" element={<Products/>}/>
            <Route path="/Collection/:category"  element={<SearchPage/>}/>
            <Route path="/products/:product" element={<Products/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/products/:product/:type" element={<Products/>}/>
            <Route path='/products/:type/:type1/:categories' element={<ProductDetails/>}/>
            <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
        </div>
        <div className="Footer">
          <Footer fixed="bottom" />
        </div>

      </Router>
    </div>
  );
}

export default App;
