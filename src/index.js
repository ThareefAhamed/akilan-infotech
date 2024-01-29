import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';
import Customization from './Customization';
import Training from './Training';
import Contactus from './ContactUs';
import Services from './Services';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/customize",
    element: <Customization />,
  },
  {
    path: "/training",
    element: <Training />,
  },
  {
    path: "/contactus",
    element: <Contactus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
