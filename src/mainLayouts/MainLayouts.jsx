import React from 'react'
import { Outlet } from 'react-router-dom'
// import NavBar from '../components/shared/navBar/NavBar,'
import NavBarAnt from '../components/shared/navBar/NavBarAnt'

const MainLayouts = () => {
  return (
    <div>
     
       {/* <NavBar /> */}
       <NavBarAnt />
      
        <Outlet />
    </div>
  )
}

export default MainLayouts