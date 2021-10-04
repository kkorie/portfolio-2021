import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';

function App() {
  return (
    <HashRouter>
      <Header />
      <Route exact path="/" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/project" component={Project} />
      <Footer />
    </HashRouter>
  );
}

export default App;
