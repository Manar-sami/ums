
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./src/Layout/Mainlayout";
import Home from "./src/Pages/Home";
import User from "./src/Pages/User";
import UserDetails from "./src/Pages/UserDetails";

const router=createBrowserRouter([

    {
        path:'/',
        element:<Mainlayout/>,

        children:[
            {
              index:true,
              element:<Home/>
            },
            {
                path:'users',
                element:<User/>
            },
            {
                path:'user-details/:id',
                element:<UserDetails/>
            }
        ]
    }
])

export default router;