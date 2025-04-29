import Nav from "./components/Nav";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import CardDetails from "./components/CardDetails";
import Products from "./pages/products/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<CardDetails />} />
          <Route path="/product" element={<Products />} />

        </Routes>
      </div>

      <Footer />

    </div>
  );
};

export default App;