import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Food from './Component/Food/Food';
import SearchFood from './Component/SearchFood/SearchFood';
import Login from './Component/Login/Login';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Offer from './Component/Offer/Offer';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path:"/about",
        element: <About></About>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path:"/food",
        element:<Food></Food>,
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chi`),
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path:"/food/:foodname",
        element:<SearchFood></SearchFood>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.foodname}`),
        errorElement:<ErrorPage></ErrorPage>
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
