import './App.css';
import HomepageImage from './components/HomepageImage';
import { Button } from 'react-bootstrap'
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import  Footer from './components/Footer';
import  Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';

// import Background from '../../Desktop/future.jpg';

function App() {
  return (
      //
      //
      // <SmoothScroll>
      //     <h2>Smooth Scrolling</h2>
      //     <Home flexDirection="row" />
      //     <Home flexDirection="row-reverse" />
      // </SmoothScroll>

      // <div styles = {{
      //     backgroundImage: "url (/HomepageImage.js" }}></div>
    <div className="App">
        {/*<header className="App-header">*/}
        {/*<HomepageImage />*/}
        <Router basename={'/'}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/projects" exact component={() => <Projects />} />
        </Switch>
        <Footer />
      </Router>



    {/*// backgroundPosition: 'center',*/}
          {/*// backgroundSize: 'cover',*/}
          {/*// backgroundRepeat: 'no-repeat',*/}


        {/*//adding button on top of homepage image*/}
        {/*<Button variant="primary" size="lg" active>*/}
        {/*  I am a Button*/}
        {/*</Button>*/}

        {/*<Button variant="primary" size="lg" active>*/}
        {/*  I am a Button*/}
        {/*</Button>*/}

        {/*<Button variant="primary" size="lg" active>*/}
        {/*  I am a Button*/}
        {/*</Button>*/}
        {/*////////////////////////////////////////*/}





        {/*<p>*/}
        {/*  <code>My first React Website created on 1/5/2021! </code>*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}

      {/*</header>*/}

    </div>
  );
}

export default App;
