import { useState } from "react";
import "./App.css";
import Navbar  from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light'); //sets dark mode
  const [text, setText]= useState('Enable Light Mode');
  // const [alert, setAlert]= useState('light');

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setText('Disable Dark Mode')
      document.body.style.backgroundColor='#042743';
      // showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      setText('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      // showAlert("Light Mode has been enabled", "success");
    }

  }
  return (
    <>
      <Router>
        {/* <Navbar title="Text Util - My App2" aboutText="About Text Utils"/> */}
        {/* <Navbar/> */}
        <Navbar title="Text Util - My App" mode={mode} toggleMode={toggleMode} text={text}/>
        {/* <Alert alert={alert}/> */}
        <Routes>
            <Route exact path="/about">
              <Route exact path="/about" element={<About />} />
            </Route>
            <Route path="/" element={<div className="container my-3">
              <TextForm heading="Enter text to analyze:" mode={mode}/>
            </div>}>
            {/* <div className="container my-3">
              <TextForm heading="Enter text to analyze:" mode={mode}/>
            </div> */}
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
