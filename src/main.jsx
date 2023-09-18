import React from 'react'
import ReactDOM from 'react-dom/client'
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
import ImportantElement from './Pages/Admin/ImportantElement/ImportantElement';
import AddItem from './Pages/Admin/ImportantElement/AddItem';
import FrontendHome from './Pages/Frontend/Home/FrontendHome';

const router = createBrowserRouter([
  
  {
    path:"/",
    element:<FrontendHome></FrontendHome>
  },
  {
    path: "/admin",
    element:<Main></Main>,
    children:[
      {
        path:"/admin",
        element:<Home></Home>
      },
      {
        path:"/admin/orderList",
        element:<OrderList></OrderList>
      },
      {
        path:"/admin/customerManage",
        element:<CustomerManage></CustomerManage>
      },
      {
        path:"/admin/transaction",
        element:<Transaction></Transaction>
      },
      {
        path:"/admin/payment",
        element:<Home></Home>
      },
      {
        path:"/admin/settings",
        element:<Home></Home>
      },
      {
        path:"/admin/importantElement",
        element:<ImportantElement></ImportantElement>
      },
      {
        path:"/admin/addItem",
        element:<AddItem></AddItem>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
