import Nav from "./components/Nav";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Nav />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>

    </div>
  );
};

export default App;