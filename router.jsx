
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./src/Layout/Mainlayout";
import Home from "./src/Pages/Home";
import User from "./src/Pages/User";

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
            }
        ]
    }
])

export default router;