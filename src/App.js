import React from "react";
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
import Home from './Home';
import Registration from "./Registration";

function App() {
  return (
   <>
    <HashRouterRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/regi' element = {<Registration/>}></Route>
        </Routes>
    </HashRouterRouter>
   </>
  );
}

export default App;
