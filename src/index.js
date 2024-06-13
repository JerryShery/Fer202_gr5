import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/Login';
import Register from './pages/register/Resgister';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home></Home>
    {/* <Login></Login> */}
    {/* <Register></Register> */}
  </React.StrictMode>
);