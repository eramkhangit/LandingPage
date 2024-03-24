import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Review from './Components/Review.jsx'
import Contact from './Components/Contact.jsx'
import Courses from './Components/Courses.jsx'

const router = createBrowserRouter([
   {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:'home',
        element :<Home/>
      },
      {
        path:'review',
        element :<Review/>
      },
      {
        path:'courses',
        element :<Courses/>
      },
      {
        path:'contact',
        element :<Contact />
      },
      {
        path:'about',
        element :<About/>
      }
    ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
