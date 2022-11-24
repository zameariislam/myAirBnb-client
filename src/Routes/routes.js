import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/Shared/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../pages/Shared/ComingSoon'
import Details from '../pages/Details'
import Checkout from '../pages/Checkout'
import SearchResult from '../pages/SearchResult'
import PrivateRoute from './PrivateRoute'
import DashBoardLayout from '../Layout/DashBoardLayout'
import Welcome from '../pages/Dashboard/Welcome'
import Mybookings from '../pages/Dashboard/Mybookings'
import BecomeAHost from '../pages/Dashboard/BecomeAHost'
import AllUsers from '../pages/Dashboard/AllUsers'
import AllBookings from '../pages/Dashboard/AllBookings'
import AddHome from '../pages/Dashboard/AddHome'
import ManageHome from '../pages/Dashboard/ManageHome'





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
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: 'service-details',
        element: <Details />
      },
      {
        path: 'checkout',
        element: <PrivateRoute>
          <Checkout />

        </PrivateRoute>
      },
      {
        path: 'search-result',
        element: <SearchResult />
      },


    ],
  },


  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashBoardLayout />
    </PrivateRoute>,
    children: [

      {
        path: '',
        element: <Welcome />

      },
      {
        path: 'my-bookings',
        element: <PrivateRoute>
          <Mybookings/>
          
        </PrivateRoute>
      },
      {
        path: 'become-host',
        element: <PrivateRoute>
         <BecomeAHost/>
        </PrivateRoute>
      },
      {
        path: 'all-users',
        element: <PrivateRoute>
         <AllUsers/>
        </PrivateRoute>
      },
      {
        path: 'all-bookings',
        element: <PrivateRoute>
        <AllBookings/>
        </PrivateRoute>
      },
      {
        path: 'add-home',
        element: <PrivateRoute>
          <AddHome/>
        
        </PrivateRoute>
      },
      {
        path: 'manage-home',
        element: <PrivateRoute>
         <ManageHome/>
        
        </PrivateRoute>
      },

    ]
  },
])

export default router