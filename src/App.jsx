import Nav from "./components/Nav";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import CardDetails from "./components/CardDetails";

const App = () => {
  return (
    <div>
      <Nav />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<CardDetails />} />

        </Routes>
      </div>

    </div>
  );
};

export default App;