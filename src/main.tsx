import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {BrowserRouter,Routes,Route,Navigate,Outlet} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  
)
