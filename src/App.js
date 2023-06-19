import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/TextArea';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState({
    color:'black',
    backgroundColor:'white'
  });
  const toggleMode=()=>{
       if(mode.backgroundColor==='white'){
        setMode({
          color:'white',
          backgroundColor :'black'
        })
        document.body.style.backgroundColor='#213555';
       }
       else{
        setMode({
          color:'black',
          backgroundColor : 'white'
        })
        document.body.style.backgroundColor='white'
       }


  }

  return (
    <>
    <BrowserRouter>
     <Navbar title="TextGame" about="About" mode={mode} toggleMode={toggleMode}/>
     <Routes>

     <Route path="/about" element={<About mode={mode}/>} />
      <Route path="/" element={ <Form heading="Write Text here" mode={mode}/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
