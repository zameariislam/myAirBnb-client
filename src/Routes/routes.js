import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/Shared/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Login/Signup'
import Main from '../Layout/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
])

export default router