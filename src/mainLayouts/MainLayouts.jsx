import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/shared/navBar/NavBar,'

const MainLayouts = () => {
  return (
    <div>
     
       <NavBar />
      
        <Outlet />
    </div>
  )
}

export default MainLayouts