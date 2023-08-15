
import './App.css';
import NavBar from './Components/NavBar';
import TextBox from './Components/TextBox';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';

function App() {
  const [mode, setmode] = useState('dark');
  const [alert,setalert] = useState(null);
  

  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }
  if(mode==='light'){
    document.body.style.backgroundColor="gray"
  }
  const toggle = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor="white"
      showAlert("Light mode is Enabeled ","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="gray"
      showAlert("Dark mode is Enabeled ","warning")
    }
  }
  
  return (
    
    <div>
      <BrowserRouter>
      <NavBar title="Ruthik"  about="About" mode={mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path='/' element={<TextBox heading="TextXpert"  mode={mode} showAlert={showAlert}/> }/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
