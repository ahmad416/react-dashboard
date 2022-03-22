import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import ListPage from "./pages/list/List";
import New from "./pages/new/New"
import {productInputs, userInputs} from "./data/formSource";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/'>
                  <Route index element={<Home/>} />
                  <Route path='users'>
                      <Route index element={<ListPage/>} />
                      <Route path="new" element={<New input={userInputs} title='Add New User'/>} />
                  </Route>
              </Route>
              <Route path='products'>
                  <Route index element={<ListPage/>}/>
                  <Route path='new' element={<New input={productInputs} title='Add New Product'/>} />
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
