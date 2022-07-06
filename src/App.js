import './style/style.css'
import React, {useContext} from 'react';
import {DarkModeContext} from './Context/DarkContext'
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import List from './Pages/List/List';
import View from './Pages/View/View'
import New from './Pages/New/New';
import {userInputs, productInputs} from './FormInputs'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  const {darkMode} = useContext(DarkModeContext);

  console.log (darkMode);
  return (
    <div className={darkMode ? 'app dark': 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element = {<Home />} />
            <Route path = 'login' element = {<Login />} />
            <Route path='users'>
              <Route index element = {<List />} />
              <Route path='view' element = {<View />} />
              <Route path='new' element = {<New title='Users' inputs={userInputs}/>} />
            </Route>
            <Route path='products'>
              <Route index element = {<List />}/>
              <Route path='view' element = {<View />} />
              <Route path='new' element = {<New title = 'products' inputs={productInputs}/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
