import React from 'react'
import MainNav from '../components/MainNav'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
            <MainNav />
            <Outlet />



            <hr />
            <h1>Footer</h1>
    </div>
  )
}

export default RootLayout