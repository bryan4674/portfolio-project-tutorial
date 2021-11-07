import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

import Particles from "react-particles-js";

import Header from './components/Header';



function App() {
  return (
    <>
    <Particles
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        }
      }
    }}
    />
    <Navbar/> 
  <Header />

  </>
  
  );
}

export default App;
