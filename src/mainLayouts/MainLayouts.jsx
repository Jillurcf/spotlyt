import React from 'react'
import { Outlet } from 'react-router-dom'
// import NavBar from '../components/shared/navBar/NavBar,'
import NavBarAnt from '../components/shared/navBar/NavBarAnt'
import FooterPage from '../components/shared/footer/FooterPage'

const MainLayouts = () => {
  return (
    <div>
     
       {/* <NavBar /> */}
       <NavBarAnt />
      <Outlet />
      <FooterPage />
    </div>
  )
}

export default MainLayouts