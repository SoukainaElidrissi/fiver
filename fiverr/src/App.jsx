import Navbar from "./components/navbar/Navbar";
import React from 'react'
import Home from "./pages/home/Home"
import Projet from "./pages/projet/Projet"
import Projets from "./pages/projets/Projets"
import Add from "./pages/add/Add"
import Orders from "./pages/orders/Orders"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"
import Myprojets from "./pages/myprojets/Myprojets"
import "./app.scss"

import{
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./components/navbar/footer/Footer";


function App() {
  const Layout=()=>{
    return (
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>

    )
  }
  const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>

        },
        {
          path:"/projet/:id",
          element:<Projet/>

        },
        {
          path:"/projets",
          element:<Projets/>

        },
        {
          path:"/orders",
          element:<Orders/>

        },
        {
          path:"/myprojets",
          element:<Myprojets/>

        },
        {
          path:"/add",
          element:<Add/>

        },
        {
          path:"/messages",
          element:<Messages/>

        },
        {
          path:"/message/:id",
          element:<Message/>

        },

      ]
    },
  ]);

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
