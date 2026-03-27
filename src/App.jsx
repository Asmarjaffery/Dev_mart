import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { publicRoutes } from './routes/routes'

function App() {

  return (
    <>
      <RouterProvider router={publicRoutes}></RouterProvider>
    </>
  )
}

export default App
