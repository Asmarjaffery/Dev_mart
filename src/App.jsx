import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes/routes'
import { useSelector } from 'react-redux'

function App() {
  const isLogin = useSelector(state => state.user.isLogin)

  return (
    <RouterProvider router={isLogin ? privateRoutes : publicRoutes} />
  )
}

export default App