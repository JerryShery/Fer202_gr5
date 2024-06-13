import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/Login';
import Register from './pages/register/Resgister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
     <Login/>
    <Register/>
  </React.StrictMode>
);