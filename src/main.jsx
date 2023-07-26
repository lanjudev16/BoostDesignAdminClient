import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Pages/Admin/Home/Home/Home';
import OrderList from './Pages/Admin/OrderList/OrderList';
import CustomerManage from './Pages/Admin/CustomerManage/CustomerManage';
import Transaction from './Pages/Admin/Transaction/Transaction';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/orderList",
        element:<OrderList></OrderList>
      },
      {
        path:"/customerManage",
        element:<CustomerManage></CustomerManage>
      },
      {
        path:"/transaction",
        element:<Transaction></Transaction>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
