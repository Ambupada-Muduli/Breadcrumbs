import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import ProductListing from './pages/product-listing';
import ProductDetails from './pages/product-details';
import Breadcrumbs from './components/breadcrumbs';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <h1>BreadCrumbs</h1>
      {/* Breadcrumbs */}
      <Breadcrumbs />
      {/* Routes */}
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/products' element={<ProductListing />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
