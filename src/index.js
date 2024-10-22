import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './component/About';
import Cart from './component/Cart';
import Product from './component/Product';
import Countries from './component/Countries';
import Home from './component/Home';
import Contact from './component/Contact';
import Pricing from './component/Pricing';
import CountryDetails from './component/CountryDetails';
import Student from './component/Student';
import EmpolyeeForm from './component/EmpolyeeForm';
import { Provider } from 'react-redux';
import store from './store/store';
import Todolist from './component/Todolist';
import Counter from './component/Counter';
const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home></Home>
    },
      {
        path:"/Pricing",
        element:<Pricing></Pricing>
    },
      {
        path:"/Counter",
        element:<Counter></Counter>
    },
      {
        path:"/Todolist",
        element:<Todolist></Todolist>
    },
      {
        path:"/About",
        element:<About></About>
    },
      {
        path:"/Contact",
        element:<Contact></Contact>
    },
      {
        path:"/Countries",
        element:<Countries></Countries>,
        children:[
          {
            path:"/Countries/CountryDetails/:cname",
            element:<CountryDetails></CountryDetails>
        },
        ]
    },
      {
        path:"/Product",
        element:<Product></Product>
    },
      {
        path:"/Student",
        element:<Student></Student>
    },
      {
        path:"/Cart",
        element:<Cart></Cart>
    },
    {
      path:"/EmpolyeeForm",
      element:<EmpolyeeForm></EmpolyeeForm>
    }
  ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
