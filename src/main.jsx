import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root/Root';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/resume/Resume';
import Work from './pages/Work/Work';
import Contract from './pages/contract/Contract';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/resume",
        element : <Resume></Resume>
      },
      {
        path : "/work",
        element : <Work></Work>
      },
      {
        path : "/contract",
        element : <Contract></Contract>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
