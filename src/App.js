import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ScrollToTop from './components/ScrollToTop';
import { Element } from 'react-scroll';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={
            <>
              <Element name="home"><Hero /></Element>
              <Element name="highlights"><Highlights /></Element>
              <Element name="testimonials"><Testimonials /></Element>
              <Element name="about"><About /></Element>
            </>
          } />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/login/signup' element={<SignUp/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
