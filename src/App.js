import './App.css';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import About from './Components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from './Components/Settings';

function App() {
  const [Mode, setMode] = useState('light');
	const [SwitchText, setSwitchText] = useState('Enable greyscale');
  
  const toggleMode = () => {
    if(Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#495057';
      document.body.style.color = '#fff';
      setSwitchText('Disable greyscale');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#eee';
      document.body.style.color = '#333';
      setSwitchText('Enable greyscale');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" contactText="Contact Us" mode={Mode} switch={SwitchText} toggleMode={toggleMode}/> 
        <Switch>
          <Route exact path="/about">
            <div className="container my-2">
              <About mode={Mode}/>
            </div>
          </Route>
          <Route exact path="/contact-us">
            <Settings />
          </Route>
          <Route exact path="/">
            <Textbox mode={Mode} heading="Enter your text to analyze it below!!"placeholder="Enter some text here"/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
