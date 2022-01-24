import logo from './logo.svg';
// import './App.css';
import Header from './components/header_part/Header';
import Topcontainer from "./components/topcontainer/Topcontainer"
import Product_container from './components/product_container/Product_container';
import Blog_container from './components/Blog_Container/Blog_container';
import Footer_container from './components/Footer_Container/Footer_container';

function App() {
  return (
    <div className="App">
    <Header />
    <Topcontainer />
    <Product_container />
    <Blog_container />
    <Footer_container />
    </div>
  );
}

export default App;
