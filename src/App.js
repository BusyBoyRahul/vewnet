import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import Explore from './Pages/Explore';
import Contact from './Pages/Contact';
import Product from './Pages/Product';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/contactus" element={<Contact />}/>
        <Route path="/product" element={<Product />}/>
      </Routes>
    </div>
  );
}

export default App;
