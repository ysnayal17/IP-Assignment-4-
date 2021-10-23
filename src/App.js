import logo from './logo.svg';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Services from './Services';
import Contact from './Contact';
import './index.css';
import './home.css'
import './App.css';
import {Switch , Route}  from "react-router-dom";

function App() {
  return (
    <><Navbar /><Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
    </Switch></>
  );
}

export default App;
