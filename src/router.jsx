import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./home"
import Events from"./events"
import Prices from "./prices"
import Membership from "./membership"


export const router = createBrowserRouter([
    {path: '', element: <App/>},
    {path: '/home', element: <Home/>},
    {path: '/events', element: <Events/>},
    {path: '/prices', element: <Prices/>},
    {path: '/membership', element: <Membership/>},
  
  ])