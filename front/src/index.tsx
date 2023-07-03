import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import AppRouter from './Router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "aos"
import "aos/dist/aos.css"
import {store} from "./store/Store"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
