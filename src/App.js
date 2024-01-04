import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Registration from "./Registration";

function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/regi' element = {<Registration/>}></Route>
        </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
