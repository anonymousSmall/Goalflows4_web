import React from 'react'
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <MainNavbar />
      <main className=''>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
