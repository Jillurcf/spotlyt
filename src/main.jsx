import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './mainLayouts/MainLayouts';
import Home from './pages/home/banner/home/Home';
import About from './pages/about/About';
import TermsAndConditions from './components/shared/footer/TermsAndConditions';
import AboutSpotlyt from './pages/home/banner/home/AboutSpotlyt';
import PrivacyPolicy from './components/shared/footer/PrivacyPolicy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutSpotlyt />
      },
      {
        path: "/termsAndConditions",
        element: <TermsAndConditions />
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <RouterProvider router={router} />
 
  </React.StrictMode>,
)
