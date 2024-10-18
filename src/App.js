import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import Footer from './component/footer';
import Fashion from './Fashion/fashion';
import Jewellery from './jewellery/jewellery';
import Electronic from './Electronic/product';
import backgroundImage from './assets/electronic.jpg';
import Signup from './signup/signup';
import Signin from './signup/signin';

const App = () => (
  <Router>
    <div className="app">
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </section>
    </div>
  </Router>
);

export default App;
