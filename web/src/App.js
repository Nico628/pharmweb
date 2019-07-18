import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Contactpage from './components/pages/contactPage';
import Aboutpage from './components/pages/aboutPage';

function App() {
  return (

    <Router>
    <div className="App">

    <Header />

      <Route exact path='/' component={Homepage} />
      <Route exact path='/Contact' component={Contactpage} />
      <Route exact path='/About' component={Aboutpage} />

    </div>
    </Router>
  );
}

export default App;
