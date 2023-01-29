import App from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-contex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
</React.StrictMode>
);


 

